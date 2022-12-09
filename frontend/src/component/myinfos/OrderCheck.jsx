import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHistory, getHistory } from '../../redux/actions/order_actions'
import { Mobile, Pc } from '../../hooks/MediaQuery'

import Modal from '../Modal'

export default function OrderCheck() {

  const idUser = useSelector((state) => state.cart.idUser)
  const dispatch = useDispatch()

  const [ orderHistories, setOrderHistories ] = useState([])
  const [ orderNumbers, setOrderNumbers ] = useState([])
  const [ openModal, setOpenModal ] = useState(false)
  const [ orderStatus, setOrderStatus ] = useState(true)
  const [ historyNumber, setHistoryNumber ] = useState('')

  useEffect(() => {
    dispatch(getHistory(idUser))
    .then((res) => {
      const datas = res.payload
      const number = new Set(datas.map((data) => data.merchant_uid))
      const orderNum = [...number]
      const orderHistory = orderGroup(datas, 'imp_uid')
      const orderItem = Object.values(orderHistory)
      setOrderHistories(orderItem)
      setOrderNumbers(orderNum)
    })
  },[])

  useEffect(() => {
    dispatch(deleteHistory(historyNumber))
  },[dispatch, orderStatus])

  const orderGroup = (data, key) => {
    return data.reduce((carry,el) => {
      let group = el[key]

      if(carry[group] === undefined) {
        carry[group] =[]
      }
      carry[group].push(el)
      return carry
    },{})
  }

  const modalOpen = (orderNumber) => {
    setOpenModal(true)
    setHistoryNumber(orderNumber)
    console.log(orderNumber)
  }

  const modalClose = () => {
    setOpenModal(false)
  }

  const isCancel = () => {
    setOrderStatus(false)
  }


  const orderList = (orderNumber) => {
    let arr = []
    for(let i=0; i<orderHistories.length; i++) {
      arr.push(
        orderHistories[i].map((orderHistory) => (
          <TdWrap isOrderNum={orderNumber === orderHistory.merchant_uid}>
            <CheckTd>
              <div className="tdflex">
                <div className="tdimg">
                  <img src={orderHistory.ProductImg}  alt="제품사진" />
                </div>
                <div className="tddes">
                  <h3>{orderHistory.ProductName}</h3>
                  <span>{orderHistory.ProductSize}</span>
                  <span className="pandq">{orderHistory.ProductPrice} 원</span> / <span className="pandq">{orderHistory.ProductQuantity} 개</span>
                </div>
              </div>
            </CheckTd>
          </TdWrap>
        ))
      )
    } return arr
  }
  
  const orderListMobile = (orderNumber) => {
    let arr = []
    for(let i=0; i<orderHistories.length; i++) {
      arr.push(
        orderHistories[i].map((orderHistory) => (
          <TdWrap isOrderNum={orderNumber === orderHistory.merchant_uid}>
            <CheckTd>
              <div className="tdflex" style={{flexDirection: "column"}}>
                <div className="tdimg">
                  <img src={orderHistory.ProductImg}  alt="제품사진" />
                </div>
                <div className="tddes" style={{margin: "0 0", padding: "0 0", textAlign: "center"}}>
                  <h3 style={{fontSize: "13px"}}>{orderHistory.ProductName}</h3>
                  <span style={{fontSize: "13px"}}>{orderHistory.ProductSize}</span>
                  <span className="pandq" style={{fontSize: "13px"}}>{orderHistory.ProductPrice} 원</span> / <span className="pandq">{orderHistory.ProductQuantity} 개</span>
                </div>
              </div>
            </CheckTd>
          </TdWrap>
        ))
      )
    } return arr
  }

  const history = 
  <CheckTable>
    {
      orderNumbers.map((orderNumber) => (
        <>
          <CheckThead>
            <CheckTr>
              <CheckTh style={{width: '40%'}}>상품정보</CheckTh>
              <CheckTh style={{width: '30%'}}>진행상태</CheckTh>
              <CheckTh style={{width: '30%', textAlign:'center'}}>주문 번호 {orderNumber}</CheckTh>
            </CheckTr>
          </CheckThead>
          <CheckTbody>
            <CheckTr>
              {orderList(orderNumber)}
              <CheckTd>
                {
                  historyNumber === orderNumber && orderStatus !== true ? 
                  <div className="tdstatus">주문취소</div>
                  :
                  <div className="tdstatus">상품 준비중</div>
                }
              </CheckTd>
              <CheckTd>
                <div className="tdbtns">
                  <button onClick={()=>{modalOpen(orderNumber)}}>주문 취소</button>
                  <button>배송 조회</button>
                </div>
              </CheckTd>
            </CheckTr>

          </CheckTbody>
        </>
      ))
    }
  </CheckTable>

  const mobileHistory = 
  <CheckTable>
    {
      orderNumbers.map((orderNumber) => (
        <>
          <CheckThead>
            <CheckTr>
              <CheckTh>상품정보</CheckTh>
              <CheckTh style={{width: '40%'}}>진행상태</CheckTh>
              <CheckTh style={{textAlign:'center'}}>주문 번호 {orderNumber}</CheckTh>
            </CheckTr>
          </CheckThead>
          <CheckTbody>
            <CheckTr>
              {orderListMobile(orderNumber)}
              <CheckTd style={{textAlign:'center', fontSize:"12px"}}>
                {
                  historyNumber === orderNumber && orderStatus !== true ? 
                  <div className="tdstatus">주문취소</div>
                  :
                  <div className="tdstatus">상품 준비중</div>
                }
              </CheckTd>
              <CheckTd>
                <div className="tdbtns" style={{width:"80%"}}>
                  <button onClick={()=>{modalOpen(orderNumber)}}>주문 취소</button>
                  <button>배송 조회</button>
                </div>
              </CheckTd>
            </CheckTr>

          </CheckTbody>
        </>
      ))
    }
  </CheckTable>


  if(orderHistories.length === 0) {
    return (
      <>
        <Pc>
          <CheckBase>
            <CheckInner>
              <CheckContent>
                <CheckTitle>최근 주문 내역</CheckTitle>
                <CheckTableSection>
                  <CheckTable style={{fontSize: '14px', textAlign: 'center'}}>
                    최근 주문 내역이 없습니다.
                  </CheckTable>
                </CheckTableSection>
              </CheckContent>
            </CheckInner>
          </CheckBase>
        </Pc>
        <Mobile>
          <CheckBase>
            <CheckInner>
              <CheckContent>
                <CheckTitle>최근 주문 내역</CheckTitle>
                <CheckTableSection>
                  <CheckTable style={{fontSize: '14px', textAlign: 'center'}}>
                    최근 주문 내역이 없습니다.
                  </CheckTable>
                </CheckTableSection>
              </CheckContent>
            </CheckInner>
          </CheckBase>
        </Mobile>
      </>
    )
  } else {
    return (
      <>
        <Pc>
          <CheckBase>
            <CheckInner>
              <CheckContent>
                <CheckTitle>최근 주문 내역</CheckTitle>
                <CheckTableSection>
                  {history}
                </CheckTableSection>
              </CheckContent>
            </CheckInner>
          {openModal && <Modal isCancel={isCancel} close={modalClose} />}
          </CheckBase>
        </Pc>
        <Mobile>
          <CheckBase>
            <CheckInner>
              <CheckContent>
                <CheckTitle>최근 주문 내역</CheckTitle>
                <CheckTableSection>
                  {mobileHistory}
                </CheckTableSection>
              </CheckContent>
            </CheckInner>
              {openModal && <Modal isCancel={isCancel} close={modalClose} />}
          </CheckBase>
        </Mobile>
      </>
    )
  }
}

const CheckBase = styled.div`
`
const CheckInner = styled.div`
margin: 0 auto;
`

const CheckContent = styled.div`
margin-top: 50px;
`
const CheckTitle = styled.h2`
width: 100%;
font-size: 18px;
font-weight: 600;
color: #333;
display: inline-block;
padding: 0 0 10px;
margin-left: 8px;
`

const CheckTableSection = styled.section`
border-top: 2px solid black;
width: 100%;
`


const CheckTable = styled.table`
margin: 25px auto;
width: 95%;
`


const CheckThead = styled.thead`
display: table-header-group;
border-bottom: 1px solid #333;
`


const TdWrap = styled.div`
display: ${(props) => props.isOrderNum ? 'block' : 'none'};
margin-left: 10px;
`


const CheckTr = styled.tr`
display: table-row ;
`
const CheckTh = styled.th`
padding: 10px 10px;
text-align: left;
font-size: 13px;
`


const CheckTbody = styled.tbody`
display: table-row-group;
`

const CheckTd = styled.td`
padding: 16px 20px;
position: relative;
> .tdflex {
  display: flex;
  > .tdimg {
    img {
      width: 50px;
      height: 160px;
    }
  }
  > .tddes {
    height: 150px;
    margin-left: 20px;
    padding-top: 50px;
    >h3 {
      font-size: 14px;
    }
    span {
      display: block;
      font-size: 13px;
      color: #333;
      &.pandq{
        display: inline-box;
        color: black;
      }
    }
  }
}
>.tdstatus {
  position: absolute;
  top: 0;
  left: 8px;
  font-size: 13px;
  padding: 40px 0 0;
  color: #333;
}
>.tdbtns {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 0 0;
  font-size: 14px;
  color: #333;
  > button {
    width: 100%;
    font-size: 13px;
    border: 1px solid #959595;
    padding: 8px 10px;
    margin: 5px 0;
    &:hover {
      color: black;
    }
  }
}
`