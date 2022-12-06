import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import icon from '../../assets/icon.png'
import { deleteAllCart } from '../../redux/actions/cart_actions'
import { getUser } from '../../redux/actions/join_actions'
import { addHistory, deleteAllOrder, getOrderItem, orderCompletion } from '../../redux/actions/order_actions'

import { Mobile, Pc } from '../../hooks/MediaQuery'

import Address from '../myinfos/Address'


export default function Order({match}) {

  const dispatch = useDispatch()
  const idUser = useSelector((state) => state.cart.idUser)

  const [ recipientNumber, setRecipientNumber ] = useState('')
  const [ recipient, setRecipient ] = useState('')
  const [ isCheck, setIsCheck ] = useState(false)
  const [ orderItems, setOrderItems ] = useState([])
  const [ userInfo, setUserInfo ] = useState([])
  const [ show, setShow ] = useState(true)
  const [address, setAddress] = useState({
    postcode: '',
    defaultAddr: ''
  })
  const [ inputAddress, setInputAddress ] = useState('')
  const [ changeAddress, setChangeAddress ] = useState(false)
  const [ totlaPrice, setTotalPrice ] = useState(0)
  const [ checkNull, setCheckNull ] = useState(false)
  const [ fee, setFee ] = useState(0)

  useEffect(() => {
    paymentWithJquery()
    dispatch(getOrderItem(idUser))
    .then((res) => {
      setOrderItems(res.payload)
      calculateTotal(res.payload)
    })
    dispatch(getUser(idUser))
    .then((res) => {
      const infos = res.payload.data[0]

      if(infos.UserPhone === null && infos.UserPhoneMid === null && infos.UserPhoneEnd === null && infos.UserPostCode === null) {
        infos.UserPhone = '기존에 작성한'
        infos.UserPhoneMid = ' 전화번호가 없습니다.'
        infos.UserPhoneEnd = ' 마이페이지에서 연락처를 작성해주세요.'
        infos.UserPostCode = ''
        infos.UserDefault = ''
        setAddress({
          postcode:infos.UserPostCode,
          defaultAddr:infos.UserDefault
        })
        setUserInfo(infos)
        setCheckNull(true)
      } else {
        setUserInfo(infos)
        setCheckNull(false)
        setAddress({
          postcode:infos.UserPostCode,
          defaultAddr:infos.UserDefault
        })
      }
    })
    return () => {
      dispatch(deleteAllOrder(idUser))
    }
  },[])

  const paymentWithJquery = () => {
    const jquery = document.createElement("script")
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js"
    const iamport = document.createElement("script")
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"
    document.head.appendChild(jquery)
    document.head.appendChild(iamport)
    return () => {
      document.head.removeChild(jquery)
      document.head.removeChild(iamport)
    }
  }

  const createOrderName = () => {
    if(orderItems.length === 1) {
      return orderItems.ProductName[0]
    } else {
      return `${orderItems[0].ProductName} 외 ${orderItems.length - 1}개`
    }
  }

  const createOrderNum = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    let orderNum = year + month + day;
    for (let i = 0; i < 10; i++) {
      orderNum += Math.floor(Math.random() * 8);
    }
    return orderNum
  }

  const onClickPayment = () => {
    if(address.postcode === '' || inputAddress === '') {
      return alert('주소를 작성해주세요.')
    } else if (recipient === '') {
      return alert('수령인 성함을 입력해주세요.')
    } else if (recipientNumber === '') {
      return alert('수령인 연락처를 입력해주세요.')
    }

    const IMP = window.IMP
    IMP.init("imp60534226")
    const data = {
      pg: "html5_inicis", 
      pay_method: "card", 
      merchant_uid: createOrderNum(), 
      name: createOrderName(), 
      amount: totlaPrice,
      buyer_name: userInfo.UserName,
      buyer_email: userInfo.UserEmail,
    }
    IMP.request_pay(data, callback)
  }

  const callback = (res) => {
    const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount } = res
    if (success) {
      let body = {
        imp_uid: imp_uid,
        merchant_uid: merchant_uid,
        pay_method: pay_method,
        paid_amount: paid_amount,
        UserName: userInfo.UserName,
        UserEmail: userInfo.UserEmail,
        Recipient: recipient,
        RecipientNumber: recipientNumber,
        postcode: address.postcode,
        defaultAdd: address.defaultAddr,
        detailAdd: inputAddress
      }
      let orderHistory = orderItems.map((orderItem) => {
        let historyItem = {...orderItem}
        historyItem.imp_uid = imp_uid
        historyItem.merchant_uid = merchant_uid
        return historyItem
      })
      let history = {
        history: orderHistory
      }
      dispatch(orderCompletion(body))
      dispatch(addHistory(history))
      dispatch(deleteAllCart(idUser))
      alert("결제 성공")

      window.location.href = `${match.url}/completed`
    } else {
      alert(`결제 실패 : ${error_msg}`)
    }
  }

  const handleChange = () => {
    setChangeAddress(!changeAddress)
    setAddress({
      postcode: '',
      defaultAddr: ''
    })
    setInputAddress('')
  }

  console.log(orderItems)

  const orderItemList = 
  <OrderInfo>
    {
      orderItems.map(orderItem => (
        <OrderList key={orderItem.idOrder}>
          <OrderThumbnail>
            <img src={orderItem.ProductImg} alt='제품사진' />
          </OrderThumbnail>
          <OrderContents>
            <OrderContentsWrap>
              <h3>{orderItem.ProductName}</h3>
              <p>{orderItem.ProductSize}</p>
              <p>수량 : {orderItem.quantity} 개</p>
            </OrderContentsWrap>
          </OrderContents>
          <OrderRightColumn>{(orderItem.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</OrderRightColumn>
        </OrderList>
      ))
    }
  </OrderInfo>

  const handleCheckbox = (e) => {
    if(e.target.checked) {
      setIsCheck(true)
      setRecipient(userInfo.UserName)
      setRecipientNumber(`${userInfo.UserPhone}${userInfo.UserPhoneMid}${userInfo.UserPhoneEnd}`)
    } else {
      setIsCheck(false)
    }
  }


  let calculateTotal = (orderItems) => {
    let total = 0;

    orderItems.map(orderItem => {
      return total += orderItem.price *  orderItem.quantity
    })
    setTotalPrice(total)
    if (total < 30000) {
      const totalPayment = total + 3000
      setTotalPrice(totalPayment)
      setFee(3000)
    } else {
      setTotalPrice(total)
    }
  }

  return (
    <>
      <Pc>
        <OrderBase>
          <OrderInner>
            <Section className='order' style={{padding: '80px 0'}}>
              <SectionTitle onClick={()=>{setShow(!show)}} style={{cursor: 'pointer'}}>
                <h1>주문 정보</h1>
                <ToggleBtn isShow={show}></ToggleBtn>
              </SectionTitle>
              <OrderInfoWrap isShow={show}>
                {orderItemList}
                <OrderAmount style={{fontWeight: 400, padding: "15px 55px 0"}}>배송비 : {fee} 원</OrderAmount>
                <OrderAmount>총 금액 : {totlaPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</OrderAmount>
              </OrderInfoWrap>
            </Section>

            <Section className='user'>
              <SectionTitle>
                <h1>주문자 정보</h1>
              </SectionTitle>

              <ContentWrap>
                <UserContents>
                  <h3>{userInfo.UserName}</h3>
                  <p>{`${userInfo.UserPhone}${userInfo.UserPhoneMid}${userInfo.UserPhoneEnd}`}</p>
                  <p>{userInfo.UserEmail}</p>
                </UserContents>
              </ContentWrap>
            </Section>
            
            <Section className='recipient'>
              <SectionTitle style={{display:'flex'}}>
                <h1>수령인 정보</h1>
                <CheckBox>
                  <Input type="checkbox" id="all_class_checkbox" onChange={(e) => {handleCheckbox(e)}} checked={isCheck} />
                  <FormLabel>주문자 정보와 동일</FormLabel>
                </CheckBox>
              </SectionTitle>
              {isCheck !== true && 
                <ContentWrap>
                  <RecipientContents>
                    <InputContainer>
                      <FormLabel>성함</FormLabel>
                      <Input 
                        id="name"
                        type="text"
                        required
                        placeholder="수령인 성함을 입력해주세요."
                        onChange={(e)=>{setRecipient(e.target.value)}}
                      />
                    </InputContainer>
                    <InputContainer>
                      <FormLabel>연락처</FormLabel>
                      <Input 
                        id="phonenumber"
                        type="number"
                        required
                        placeholder="수령인 연락처를 입력해주세요."
                        onChange={(e)=>{setRecipientNumber(e.target.value)}}
                      />
                      <span>('-' 기호를 빼고 입력해주세요.)</span>
                    </InputContainer>
                  </RecipientContents>
                </ContentWrap>
              }
              {isCheck && checkNull &&
                <ContentWrap>
                  <RecipientContents>
                    <InputContainer>
                      <FormLabel>성함</FormLabel>
                      <FormPostCode>{recipient}</FormPostCode>
                    </InputContainer>
                    <InputContainer>
                      <FormLabel>연락처</FormLabel>
                      <Input 
                        id="phonenumber"
                        type="number"
                        required
                        placeholder="수령인 연락처를 입력해주세요."
                        onChange={(e)=>{setRecipientNumber(e.target.value)}}
                      />
                      <span>('-' 기호를 빼고 입력해주세요.)</span>
                    </InputContainer>
                  </RecipientContents>
                </ContentWrap>          
              }
              {isCheck && checkNull !== true &&
                <ContentWrap>
                  <RecipientContents>
                    <InputContainer>
                      <FormLabel>성함</FormLabel>
                      <FormPostCode>{recipient}</FormPostCode>
                    </InputContainer>
                    <InputContainer>
                      <FormLabel>연락처</FormLabel>
                      <FormPostCode>{recipientNumber}</FormPostCode>
                    </InputContainer>
                  </RecipientContents>
                </ContentWrap>       
              }

            </Section>

            <Section className='delivery'>
              <SectionTitle>
                <h1>배송 정보</h1>
              </SectionTitle>

              <ContentWrap>
                { changeAddress !== true && 
                  <FormContent>
                    <NavWrap>
                      <NavList>
                        <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                          <img src={icon} alt="포인터" />
                          기본배송지
                        </NavItem>
                        <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                          <img src={icon} alt="포인터" />
                          배송지 변경하기
                        </NavItem>
                      </NavList>
                    </NavWrap>

                    
                    <InputContainer style={{display:'flex'}}>
                      <FormPostCode style={{width: '80px','textAlign' : 'center'}}>{address.postcode}</FormPostCode>
                      <Address setAddress={setAddress} />
                    </InputContainer>

                    <InputContainer>
                      <FormPostCode>{address.defaultAddr}</FormPostCode>
                      <span>기본 주소</span>
                    </InputContainer>

                    <InputContainer>
                      <Input 
                        id="address"
                        type="text"
                        value={inputAddress}
                        required
                        placeholder="상세주소를 입력해주세요."
                        onChange={(e)=>{setInputAddress(e.target.value)}} 
                      />
                      <span>나머지 주소</span>
                    </InputContainer>
                  </FormContent>
                }

                { changeAddress && 
                    <FormContent>
                      <NavWrap>
                        <NavList>
                          <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                            <img src={icon} alt="포인터" />
                            기본배송지
                          </NavItem>
                          <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                            <img src={icon} alt="포인터" />
                            배송지 변경하기
                          </NavItem>
                        </NavList>
                      </NavWrap>

                      
                      <InputContainer style={{display:'flex'}}>
                        <FormPostCode style={{width: '80px','text-align' : 'center'}}>{address.postcode}</FormPostCode>
                        <Address setAddress={setAddress} />
                      </InputContainer>

                      <InputContainer>
                        <FormPostCode>{address.defaultAddr}</FormPostCode>
                        <span>기본 주소</span>
                      </InputContainer>

                      <InputContainer>
                        <Input 
                          id="address"
                          type="text"
                          value={inputAddress}
                          required
                          placeholder="상세주소를 입력해주세요."
                          onChange={(e)=>{setInputAddress(e.target.value)}} 
                        />
                      <span>나머지 주소</span>
                      </InputContainer>
                    </FormContent>
                  }
              </ContentWrap>
            </Section>

            <Section className='payment'>
              <PayCheck>
                <CheckoutBtn onClick={()=>{onClickPayment()}}>결제하기</CheckoutBtn>
              </PayCheck>
            </Section>
          </OrderInner>
        </OrderBase>
      </Pc>

      {/* 모바일 */}

      <Mobile>
        <OrderBase style={{margin: "0"}}>
          <OrderInner style={{width: "370px"}}>
            <MobileSection className='order' style={{padding: '80px 0'}}>
              <SectionTitle onClick={()=>{setShow(!show)}} style={{cursor: 'pointer'}}>
                <h1>주문 정보</h1>
                <ToggleBtn isShow={show}></ToggleBtn>
              </SectionTitle>
              <OrderInfoWrap isShow={show}>
                {orderItemList}
                <OrderAmount style={{fontWeight: 400, padding: "15px 0 0"}}>배송비 : {fee} 원</OrderAmount>
                <OrderAmount style={{padding: "15px 0 0"}}>총 금액 : {totlaPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</OrderAmount>
              </OrderInfoWrap>
            </MobileSection>

            <MobileSection className='user'>
              <SectionTitle>
                <h1>주문자 정보</h1>
              </SectionTitle>

              <ContentWrap>
                <UserContents>
                  <h3>{userInfo.UserName}</h3>
                  <p>{`${userInfo.UserPhone}${userInfo.UserPhoneMid}${userInfo.UserPhoneEnd}`}</p>
                  <p>{userInfo.UserEmail}</p>
                </UserContents>
              </ContentWrap>
            </MobileSection>
            
            <MobileSection className='recipient'>
              <SectionTitle style={{display:'flex'}}>
                <h1>수령인 정보</h1>
                <CheckBox>
                  <Input type="checkbox" id="all_class_checkbox" onChange={(e) => {handleCheckbox(e)}} checked={isCheck} />
                  <FormLabel>주문자 정보와 동일</FormLabel>
                </CheckBox>
              </SectionTitle>
              {isCheck !== true && 
                <ContentWrap style={{width: "100%"}}>
                  <RecipientContents>
                    <InputContainer style={{width: "100%"}}>
                      <FormLabel>성함</FormLabel>
                      <Input 
                        id="name"
                        type="text"
                        required
                        placeholder="수령인 성함을 입력해주세요."
                        onChange={(e)=>{setRecipient(e.target.value)}}
                      />
                    </InputContainer>
                    <InputContainer style={{width: "100%"}}>
                      <FormLabel>연락처</FormLabel>
                      <div style={{display: "flex", flexDirection: "column"}}>
                        <Input 
                          id="phonenumber"
                          type="number"
                          required
                          placeholder="수령인 연락처를 입력해주세요."
                          onChange={(e)=>{setRecipientNumber(e.target.value)}}
                        />
                        <span style={{fontSize: "12px", color: "#252525", marginTop: "10px"}}>('-' 기호를 빼고 입력해주세요.)</span>
                      </div>
                    </InputContainer>
                  </RecipientContents>
                </ContentWrap>
              }
              {isCheck && checkNull &&
                <ContentWrap style={{width: "100%"}}>
                  <RecipientContents>
                    <InputContainer style={{width: "100%"}}>
                      <FormLabel>성함</FormLabel>
                      <FormPostCode>{recipient}</FormPostCode>
                    </InputContainer>
                    <InputContainer style={{width: "100%"}}>
                      <FormLabel>연락처</FormLabel>
                      <div style={{display: "flex", flexDirection: "column"}}>
                        <Input 
                          id="phonenumber"
                          type="number"
                          required
                          placeholder="수령인 연락처를 입력해주세요."
                          onChange={(e)=>{setRecipientNumber(e.target.value)}}
                        />
                        <span style={{fontSize: "12px", color: "#252525", marginTop: "10px"}}>('-' 기호를 빼고 입력해주세요.)</span>
                      </div>
                    </InputContainer>
                  </RecipientContents>
                </ContentWrap>          
              }
              {isCheck && checkNull !== true &&
                <ContentWrap style={{width: "90%"}}>
                  <RecipientContents>
                    <InputContainer style={{width: "100%"}}>
                      <FormLabel>성함</FormLabel>
                      <FormPostCode>{recipient}</FormPostCode>
                    </InputContainer>
                    <InputContainer>
                      <FormLabel>연락처</FormLabel>
                      <FormPostCode>{recipientNumber}</FormPostCode>
                    </InputContainer>
                  </RecipientContents>
                </ContentWrap>       
              }

            </MobileSection>

            <MobileSection className='delivery'>
              <SectionTitle>
                <h1>배송 정보</h1>
              </SectionTitle>

              <ContentWrap style={{width: "100%"}}>
                { changeAddress !== true && 
                  <FormContent>
                    <NavWrap style={{width: "100%"}}>
                      <NavList>
                        <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                          <img src={icon} alt="포인터" />
                          기본배송지
                        </NavItem>
                        <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                          <img src={icon} alt="포인터" />
                          배송지 변경하기
                        </NavItem>
                      </NavList>
                    </NavWrap>

                    
                    <InputContainer style={{display:'flex'}}>
                      <FormPostCode style={{width: '80px','textAlign' : 'center'}}>{address.postcode}</FormPostCode>
                      <Address setAddress={setAddress} />
                    </InputContainer>

                    <InputContainer>
                      <FormPostCode>{address.defaultAddr}</FormPostCode>
                      <span>기본 주소</span>
                    </InputContainer>

                    <InputContainer>
                      <Input 
                        id="address"
                        type="text"
                        value={inputAddress}
                        required
                        placeholder="상세주소를 입력해주세요."
                        onChange={(e)=>{setInputAddress(e.target.value)}} 
                      />
                      <span>나머지 주소</span>
                    </InputContainer>
                  </FormContent>
                }

                { changeAddress && 
                    <FormContent>
                      <NavWrap style={{width: "100%"}}>
                        <NavList>
                          <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                            <img src={icon} alt="포인터" />
                            기본배송지
                          </NavItem>
                          <NavItem onClick={() => {handleChange()}} isClick={changeAddress}>
                            <img src={icon} alt="포인터" />
                            배송지 변경하기
                          </NavItem>
                        </NavList>
                      </NavWrap>

                      
                      <InputContainer style={{display:'flex'}}>
                        <FormPostCode style={{width: '80px','text-align' : 'center'}}>{address.postcode}</FormPostCode>
                        <Address setAddress={setAddress} />
                      </InputContainer>

                      <InputContainer>
                        <FormPostCode>{address.defaultAddr}</FormPostCode>
                        <span>기본 주소</span>
                      </InputContainer>

                      <InputContainer>
                        <Input 
                          id="address"
                          type="text"
                          value={inputAddress}
                          required
                          placeholder="상세주소를 입력해주세요."
                          onChange={(e)=>{setInputAddress(e.target.value)}} 
                        />
                      <span>나머지 주소</span>
                      </InputContainer>
                    </FormContent>
                  }
              </ContentWrap>
            </MobileSection>

            <MobileSection className='payment'>
              <PayCheck>
                <CheckoutBtn onClick={()=>{onClickPayment()}}>결제하기</CheckoutBtn>
              </PayCheck>
            </MobileSection>
          </OrderInner>
        </OrderBase>
      </Mobile>
    </>
  )
}


const OrderBase = styled.div`
font-family: 'AppleSDGothicNeo';
margin-top: 50px;
`

const OrderInner = styled.div`
width: 1100px;
margin: 0 auto;
`

const Section = styled.section`
width: 80%;
margin: 0 auto;
padding: 20px 0;
border-bottom: 1px solid #a9a9a9;
`
const MobileSection = styled.section`
width: 100%;
margin: 0 auto;
padding: 20px 0;
border-bottom: 1px solid #a9a9a9;
`

const Input = styled.input`
width: 300px;
height: 28px;
display: flex;
justify-content: center;
font-size: 13px;
outline: none;
border: none;
border-bottom: 1px solid black;
background-color: transparent;
margin-right: 8px;
`
const FormLabel = styled.div`
display: flex;
height: 18px;
font-size: 13px;
padding: 0 5px;
margin: 0 20px;
cursor: pointer;
`


const SectionTitle = styled.div`
position: relative;
width: 80%;
margin: 0 auto;
display: flex;
align-items: center;
> h1 {
  font-weight: 500;
  font-size: 18px;
  padding: 20px 0;
}
`

const CheckBox = styled.div`
display: flex;
${Input} {
  width: 15px;
  height: 15px;
  margin: 0 7px;
  cursor: pointer;
}
${FormLabel} {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #333;
  cursor: default;
}
`

const ToggleBtn = styled.div`
width: 24px;
height: 24px;
position: absolute;
top: 25px;
right: 10px;
&::after {
  content: '';
  width: 10px; 
  height: 10px;
  border-top: 1px solid #252525;
  border-right: 1px solid #252525;
  display: inline-block;
  transform: ${(props) => props.isShow ? 'rotate(135deg)' : 'rotate(315deg)'};
}
`

const OrderInfoWrap = styled.div`
display: ${(props) => props.isShow ? 'show' : 'none'};
`

const OrderInfo = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
`

const OrderList = styled.li`
width: 80%;
border-bottom: 1px solid black;
display: flex;
&:first-child {
  border-top: 1px solid black; 
}
`

const OrderThumbnail = styled.div`
width: 54px;
> img {
  width: 100%;
  height: 100%;
}
`

const OrderContents = styled.div`
width: calc(70% - 54px);
margin: 0 40px;
display: flex;
align-items: center;
`

const OrderContentsWrap = styled.div`
font-size: 13px;
flex-direction: column;
> h3 {
  font-weight: 500;
  padding: 15px 0;
  font-size: 13px;
}
> p {
  margin-right: 15px;
  color: #333;
}
`
const OrderRightColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
`

const OrderAmount =  styled.div`
width: 80%;
margin: 0 auto;
text-align: right;
padding: 10px 55px;
font-size: 13px;
font-weight: 500;
`

const ContentWrap = styled.div`
width: 80%;
margin: 0 auto;
`
const InputContainer = styled.div`
width: 75%;
text-align: left;
margin: 15px 30px;
display: flex;
>span {
  font-size: 12px;
  color: #252525;
}
`

const UserContents = styled.div`
font-size: 13px;
margin: 15px 15px;
>h3 {
  font-size: 15px;
  font-weight: 500;
  padding: 0 0 10px;
}
p {
  color: #333;
}
`

const FormPostCode = styled.div`
width: 300px;
height: 28px;
font-size: 13px;
border-bottom: 1px solid #252525;
margin-right: 8px;
padding-top: 3px;
`

const RecipientContents = styled.div`
${InputContainer} {
  display: flex;
  margin: 15px 0;
}
${Input} {
  width: 190px;
  padding: 0 10px;
}
${FormPostCode} {
  width: 150px;
  text-align: center;
  color: #555;
}
`

const FormContent = styled.div`
padding-bottom: 15px;
`

const NavWrap = styled.div`
width: 60%;
display: flex;
margin-bottom: 30px;
padding: 20px 0;
`

const NavList = styled.ul`
display: flex;
width: 100%;
height: 40px;
font-size: 13px;
margin: 0 auto;
cursor: pointer;
border-bottom: 2px solid #858585;
`

const NavItem = styled.li`
width: 35%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
&:first-child {
  background-color: ${(props) => props.isClick ? '#cdcdcd' : 'transparent'};
  color: ${(props) => props.isClick ? '#333' : 'black'};
  border: ${(props) => props.isClick ? 'none' : '2px solid #858585'};
  border-bottom: none;
}
&: last-child {
  background-color: ${(props) => props.isClick ? 'tarnsparent' : '#cdcdcd'};
  color: ${(props) => props.isClick ? 'black' : '#333'};
  border: ${(props) => props.isClick ? '2px solid #858585' : 'none'};
  border-bottom: none;
}
>img{
  width: 18px;
  height: 18px;
}
`

const PayCheck = styled.div`
display:flex;
align-item: center;
justify-content: center;
padding: 50px 0;
`

const CheckoutBtn = styled.button`
width: 300px;
height: 50px;
background-color: #443f3c;
border: 1px solid #443f3c;
color: #fff;
`