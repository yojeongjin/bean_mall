import React, { useState } from 'react'
import styled from 'styled-components'

export default function FAQ() {
  const [ firstFaq, setFirstFaq ] = useState(true)
  const [ secondFaq, setSecondFaq ] = useState(true)
  const [ thirdFaq, setThirdFaq ] = useState(true)
  const [ forthFaq, setForthFaq ] = useState(true)


  return (
    <FAQBase>
      <Inner>
        <FAQContent>
          <FAQTitle>CUSTOMER SEVICE</FAQTitle>
          <FAQSection>
            <FAQlist>
              <FAQItem>
                <QBox onClick={()=> {setFirstFaq(!firstFaq)}}>
                  <FAQ_QA style={{marginLeft: "10px"}}>Q</FAQ_QA>
                  <FAQSpan>배송 기간은 얼마나 걸리나요?</FAQSpan>
                </QBox>
                <CBox isClicked={firstFaq}>
                  <FAQ_QA>A</FAQ_QA>
                  <FAQSpan> 지정한 택배를 이용하여 보통 주문일로부터 3-5일내 발송됩니다.
                  * 프리오더 혹은 배송기간이 상이한 경우 각 상품페이지에 개별 배송일을 기재합니다.</FAQSpan>
                </CBox>

                <QBox onClick={()=> {setSecondFaq(!secondFaq)}}>
                  <FAQ_QA style={{marginLeft: "10px"}}>Q</FAQ_QA>
                  <FAQSpan>문의는 어떻게 하나요?</FAQSpan>
                </QBox>
                <CBox isClicked={secondFaq}>
                  <FAQ_QA>A</FAQ_QA>
                  <FAQSpan> 홈페이지 내 게시판 '1:1문의하기' 에 남겨주시면 확인 후 신속하게 답변 드리겠습니다.</FAQSpan>
                </CBox>

                <QBox onClick={()=> {setThirdFaq(!thirdFaq)}}>
                  <FAQ_QA style={{marginLeft: "10px"}}>Q</FAQ_QA>
                  <FAQSpan>교환 및 반품은 어떻게 하나요 ?</FAQSpan>
                </QBox>
                <CBox isClicked={thirdFaq}>
                  <FAQ_QA>A</FAQ_QA>
                  <FAQSpan> 홈페이지 마이페이지를 통하여 교환 / 반품 접수해주시면 택배사로 반품 접수를 도와드립니다.</FAQSpan> <br></br>
                  <FAQSpan style={{fontWeight: 500, marginLeft: "20px"}}> 단, 제품 수령 후 24시간 이내 접수하셔야 하며, 7일 이내 제품이 도착하여야 합니다.</FAQSpan>
                </CBox>

                <QBox onClick={()=> {setForthFaq(!forthFaq)}}>
                  <FAQ_QA style={{marginLeft: "10px"}}>Q</FAQ_QA>
                  <FAQSpan>환불절차는 어떻게 되나요 ?</FAQSpan>
                </QBox>
                <CBox isClicked={forthFaq}>
                  <FAQ_QA>A</FAQ_QA>
                  <FAQSpan> 환불시 반품 확인여부를 확인한 후 3영업일 이내에 결제 금액을 환불해 드립니다.</FAQSpan> <br></br>
                  <FAQSpan style={{'margin-left':'18px'}}> 신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이 청구되지 않게 합니다.</FAQSpan> <br></br>
                  <FAQSpan style={{fontWeight: 500, marginLeft: "20px"}}> (단, 신용카드 결제일자에 맞추어 대금이 청구 될 수 있으며 이 경우 익월 신용카드 대금청구시 카드사에서 환급처리됩니다.)</FAQSpan>
                </CBox>

              </FAQItem>
            </FAQlist>
          </FAQSection>
        </FAQContent>
      </Inner>
    </FAQBase>
  )
}


const FAQBase = styled.div`
font-family: 'AppleSDGothicNeo';
`

const Inner = styled.div`
margin: 0 auto;
@media ${props => props.theme.mobile} {
  width: 370px;
  padding-top: 20px;
}
`

const FAQContent = styled.div`
margin-top: 50px;
@media ${props => props.theme.mobile} {
  margin: 0;
}
`

const FAQTitle = styled.h1`
width: 100%;
font-size: 18px;
font-weight: bold;
color: #333;
display: inline-block;
padding: 0 0 10px;
margin-left: 8px;
`

const FAQSection =styled.section`
border-top: 1px solid black;
width: 100%;
`

const FAQlist= styled.ol`
display: block;
margin-top: 15px;
`

const FAQItem= styled.li`
width: 100%;
`
const QBox = styled.div`
padding: 10px 0;
position: relative;
border-bottom: 1px solid #a9a9a9;
cursor: pointer;
&::after {
  content: '';
  width: 10px; 
  height: 10px;
  border-top: 1px solid #555;
  border-right: 1px solid #555;
  display: inline-block;
  transform: rotate(135deg);
  position: absolute;
  top: 8px;
  right: 20px; 
}
`

const CBox = styled.div`
display: ${(props) => props.isClicked ? 'none' : 'display'};
padding: 20px 0;
margin-left: 30px;
`

const FAQ_QA =styled.span`
  position: relative;
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
  margin-right: 10px;
  color: #666;
`

const FAQSpan = styled.span`
display: inline-block;
font-size: 12px;
`