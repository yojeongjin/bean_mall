import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../redux/actions/order_actions'


export default function OrderCheck() {

  const idUser = useSelector((state) => state.cart.idUser)
  const dispatch = useDispatch()

  const [ orderHistories, setOrderHistories ] = useState([])
  const [ orderNumbers, setOrderNumbers ] = useState([])

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

  const history = 
  <CheckTable>
    {
      orderNumbers.map((orderNumber) => (
        <>
          <CheckThead>
            <CheckTr>
              <CheckTh>상품정보</CheckTh>
              <CheckTh>진행상태</CheckTh>
              <SpanSeciton>주문 번호 {orderNumber}</SpanSeciton>
            </CheckTr>
          </CheckThead>
          <CheckTbody>
            <CheckTr>
              {orderList(orderNumber)}
              <CheckTd>
              <div className="tdstatus">상품준비중</div>
              </CheckTd>
              <CheckTd>
                <div className="tdbtns">
                  <button>주문 취소</button>
                  <button>반품 / 교환</button>
                  <button>배송 조회</button>
                </div>
              </CheckTd>
            </CheckTr>

          </CheckTbody>
        </>
      ))
    }

  </CheckTable>



  return (
    <CheckBase>
      <CheckInner>
        <CheckContent>
          <CheckTitle>최근 주문 내역</CheckTitle>
          <CheckTableSection>
            {history}
          </CheckTableSection>
        </CheckContent>
      </CheckInner>
    </CheckBase>
  )
}

const CheckBase = styled.div`
background-color: #ddd6d0;
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
width: 90%;
`


const CheckThead = styled.thead`
display: table-header-group;
border-bottom: 1px solid #333;
`

const SpanSeciton = styled.div`
font-size: 13px;
text-align: end;
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
font-size: 14px;
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