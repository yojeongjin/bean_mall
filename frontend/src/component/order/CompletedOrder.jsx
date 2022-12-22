import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { getPaymentInfo } from '../../redux/actions/order_actions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function CompletedOrder() {

  const dispatch = useDispatch()
  const paymentId = useSelector((state) => state.order.paymentToken)

  const [ paymentInfo, setPaymentInfo ] = useState([])
  const [ orderDate, setOrderDate ] = useState('')

  useEffect(() => {
    dispatch(getPaymentInfo(paymentId))
    .then((res) => {
      const data = res.payload[0]
      setPaymentInfo(data)
      const date = data.createdAt.split('T')[0]
      setOrderDate(date)
    })
  },[])


  return(
    <CompletedOrderBase>
      <Inner>
      <CompletedContents>
        <Title>주문 상세 내역</Title>
        
        <OrderNumber>
          <Subheading>주문 일자</Subheading>
          <Contents>{orderDate}</Contents>

          <Subheading>주문 번호</Subheading>
          <Contents>{paymentInfo.merchant_uid}</Contents>
        </OrderNumber>

        <InfoSection>
          <SubTitle>구매자 정보</SubTitle>
          <InfoContents>
            <Subheading>주문자
              <span>{paymentInfo.UserName}</span>
            </Subheading>
            <Subheading>이메일
              <span>{paymentInfo.UserEmail}</span>
            </Subheading>
          </InfoContents>
        </InfoSection>

        <InfoSection>
          <SubTitle>배송지 정보</SubTitle>
          <InfoContents>
            <Subheading>수령인
              <span>{paymentInfo.Recipient}</span>
            </Subheading>
            <Subheading>연락처
              <span>0{paymentInfo.RecipientNumber}</span>
            </Subheading>
            <Subheading>배송지
              <span>{`${paymentInfo.postcode} ${paymentInfo.defaultAdd} ${paymentInfo.detailAdd}`}</span>
            </Subheading>
          </InfoContents>
        </InfoSection>

        <InfoSection>
          <SubTitle>주문 금액 상세</SubTitle>
          <InfoContents>
            <SubheadingInline>결제 방식
              <span>{paymentInfo.pay_method}</span>
            </SubheadingInline>
            <SubheadingInline>총 주문 금액
              <span>{paymentInfo.paid_amount} 원</span>
            </SubheadingInline>
          </InfoContents>
        </InfoSection>
      </CompletedContents>

      <CartBtnGroup>
          <CartBtn type="button">
            <Link to="/">홈으로 돌아가기</Link>
          </CartBtn>
          <CartBtn className="keep" type="button">
            <Link to="/product">쇼핑 계속하기</Link>
          </CartBtn>
        </CartBtnGroup>
      </Inner>
    </CompletedOrderBase>
  )

}


const CompletedOrderBase = styled.div`
`
const Inner = styled.div`
width: 1100px;
margin: 0 auto;
height: 100vh;
padding-top: 60px;
@media ${props => props.theme.mobile} {
  width: 360px;
}

`
const CompletedContents = styled.div`
margin: 50px 0 0  50px;
@media ${props => props.theme.mobile} {
  margin: 50px 0 0;
}

`

const Title = styled.h1`
font-size: 17px;
font-weight: 600;
`
const SubTitle = styled.h3`
font-size: 15px;
font-weight: 600;
`

const Subheading = styled.h4`
font-size: 13px;
color: #555;
`
const SubheadingInline = styled.h4`
display: inline-block;
font-size: 13px;
color: #555;
margin: 0 10px;
&:first-child {
  margin-left: 0;
}
> span {
  display: inlien-block;
  margin-left: 7px;
  color: black;
}
`
const Contents = styled.p`
`

const OrderNumber = styled.div`
display: flex;
padding: 10px 15px;
margin: 7px 0 30px 0;
font-size: 14px;
border-bottom: 1px solid #aaa;
${Subheading} {
  margin-right: 5px;
}

${Contents} {
  margin: 0 10px 15px 0;
}
`

const InfoContents = styled.div`
padding: 10px 15px;
${Subheading} {
  padding: 10px 0;
  > span {
    display: inlien-block;
    margin-left: 20px;
    color: black;
  }
`
const InfoSection = styled.section`
margin-bottom: 20px;
border-bottom: 1px solid #aaa;
`


const CartBtnGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const CartBtn = styled.button`
width: 30%;
height: 50px;
border: 1px solid #807974;
margin: 20px 10px 0 0;
font-size: 13px;
background-color: #807974;
color: #fff;
&:hover {
  background-color: #443f3c;
}
&.keep {
  background-color: #c5bbb3;
  border: 1px solid #c5bbb3;
  color: #000;
  &:hover {
    color: #e6e6e6;
  }
}
`