import React from 'react'
import styled from 'styled-components'

export default function CompletedOrder() {

  return(
    <CompletedOrderBase>
      <Inner>
       <CompletedContents>
        <Title>주문 상세 내역</Title>
        
        <OrderNumber>
          <Subheading>주문 일자</Subheading>
          <Contents>2022-10-27</Contents>

          <Subheading>주문 번호</Subheading>
          <Contents>202232847932</Contents>
        </OrderNumber>

        <InfoSection>
          <SubTitle>구매자 정보</SubTitle>
          <InfoContents>
            <Subheading>주문자
              <span>주문자</span>
            </Subheading>
            <Subheading>연락처
              <span>주문자</span>
            </Subheading>
            <Subheading>이메일
              <span>주문자</span>
            </Subheading>
          </InfoContents>
        </InfoSection>

        <InfoSection>
          <SubTitle>배송지 정보</SubTitle>
          <InfoContents>
            <Subheading>수령인
              <span>주문자</span>
            </Subheading>
            <Subheading>연락처
              <span>주문자</span>
            </Subheading>
            <Subheading>배송지
              <span>주문자</span>
            </Subheading>
          </InfoContents>
        </InfoSection>

        <InfoSection>
          <SubTitle>주문 금액 상세</SubTitle>
          <InfoContents>
            <SubheadingInline>주문 금액
              <span>얼마얼마</span>
            </SubheadingInline>
            + 
            <SubheadingInline>배송비
              <span>얼마얼마</span>
            </SubheadingInline>
            =
            <SubheadingInline>총 주문 금액
              <span>얼마</span>
            </SubheadingInline>
          </InfoContents>
        </InfoSection>

       </CompletedContents>
      </Inner>
    </CompletedOrderBase>
  )

}


const CompletedOrderBase = styled.div`
background-color: #ddd6d0;
margin-top: 50px;
`
const Inner = styled.div`
width: 1100px;
margin: 0 auto;
border: 1px solid black;
height: 100vh;
`
const CompletedContents = styled.div`
border: 1px solid black;
margin: 50px 0 0  50px;
`

const Title = styled.h1`
border: 1px solid #fff;
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
border: 1px solid red;
display: flex;
padding: 10px 15px;
margin: 7px 0 30px 0;
font-size: 14px;
${Subheading} {
  margin-right: 5px;
}

${Contents} {
  margin-right: 10px;
}
`

const InfoContents = styled.div`
border: 1px solid orange;
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
border: 1px solid #fff;
margin-bottom: 20px;
`