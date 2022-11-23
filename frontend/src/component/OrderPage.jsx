import React, { useState } from 'react'
import styled from 'styled-components'
import icon from '../assets/icon.png'

import Address from './myinfos/Address'

export default function Order() {

  const [ show, setShow ] = useState(true)
  const [address, setAddress] = useState({
    postcode: '',
    defaultAddr: ''
  })
  const [ inputAddress, setInputAddress ] = useState('')
  const [ changeAddress, setChangeAddress ] = useState(false)

  return (
    <OrderBase>
      <OrderInner>

        <Section className='order' style={{padding: '80px 0'}}>
          <SectionTitle onClick={()=>{setShow(!show)}} style={{cursor: 'pointer'}}>
            <h1>주문 정보</h1>
            <ToggleBtn isShow={show}></ToggleBtn>
          </SectionTitle>
          <OrderInfoWrap isShow={show}>
            <OrderInfo>
              <OrderList>
                <OrderThumbnail>
                  <img src={'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%92%E1%85%B4%E1%86%AB%E1%84%89%E1%85%A2%E1%86%A8%E1%84%92%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7.webp'} alt='제품사진' />
                </OrderThumbnail>
                <OrderContents>
                  <OrderContentsWrap>
                    <h3>드 머라구 핸드크림</h3>
                    <p>사이즈</p>
                    <p>수량</p>
                  </OrderContentsWrap>
                </OrderContents>
                <OrderRightColumn>가격</OrderRightColumn>
              </OrderList>

            </OrderInfo>
            <OrderAmount>총 가격 : 300,000원</OrderAmount>
          </OrderInfoWrap>
        </Section>

        <Section className='user'>
          <SectionTitle>
            <h1>주문자 정보</h1>
          </SectionTitle>

          <ContentWrap>
            <UserContents>
              <h3>이름</h3>
              <p>01012345678</p>
              <p>jungjin46@naver.com</p>
            </UserContents>
          </ContentWrap>
        </Section>
        
        <Section className='recipient'>
          <SectionTitle style={{display:'flex'}}>
            <h1>수령인 정보</h1>
            <CheckBox>
              <Input type="checkbox" />
              <FormLabel>주문자 정보와 동일</FormLabel>
            </CheckBox>
          </SectionTitle>

          <ContentWrap>
            <RecipientContents>

              <InputContainer>
                <FormLabel>성함</FormLabel>
                <Input 
                  id="name"
                  type="text"
                  required
                  placeholder="수령인 성함을 입력해주세요."
                />
              </InputContainer>
              <InputContainer>
                <FormLabel>연락처</FormLabel>
                <Input 
                  id="phonenumber"
                  type="number"
                  required
                  placeholder="수령인 연락처를 입력해주세요."
                />
              </InputContainer>

            </RecipientContents>
          </ContentWrap>
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
                    <NavItem onClick={() => {setChangeAddress(false)}} isClick={changeAddress}>
                      <img src={icon} alt="포인터" />
                      기본배송지
                    </NavItem>
                    <NavItem onClick={() => {setChangeAddress(true)}} isClick={changeAddress}>
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

            { changeAddress && 
                <FormContent>
                  <NavWrap>
                    <NavList>
                      <NavItem onClick={() => {setChangeAddress(false)}} isClick={changeAddress}>
                        <img src={icon} alt="포인터" />
                        기본배송지
                      </NavItem>
                      <NavItem onClick={() => {setChangeAddress(true)}} isClick={changeAddress}>
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
                    <FormPostCode>안뇽</FormPostCode>
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
            <CheckoutBtn type="button">결제하기</CheckoutBtn>
          </PayCheck>
        </Section>
      </OrderInner>
    </OrderBase>

  )
}


const OrderBase = styled.div`
background-color: #ddd6d0;
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
padding: 20px 55px;
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

const RecipientContents = styled.div`

${InputContainer} {
  display: flex;
  align-items: center;
  margin: 15px 0;
}
${Input} {
  width: 170px;
}
${FormLabel} {

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
border-bottom: 1px solid #e5e7eb;
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
  border: ${(props) => props.isClick ? 'none' : '1px solid #e5e7eb'};
  border-bottom: none;
}
&: last-child {
  background-color: ${(props) => props.isClick ? 'tarnsparent' : '#cdcdcd'};
  color: ${(props) => props.isClick ? 'black' : '#333'};
  border: ${(props) => props.isClick ? '1px solid #e5e7eb' : 'none'};
  border-bottom: none;
}

>img{
  width: 18px;
  height: 18px;
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

const PayCheck = styled.div`
display:flex;
align-item: center;
justify-content: center;
padding: 50px 0;
`

const CheckoutBtn = styled.button`
border: 1px solid black;
width: 300px;
height: 50px;
background-color: #443f3c;
border: 1px solid #443f3c;
color: #fff;
`