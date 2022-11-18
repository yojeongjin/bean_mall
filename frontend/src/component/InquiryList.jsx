import React from 'react'
import styled from 'styled-components'


export default function InquiryList() {
  return (
    <InquiryBase>
      <InquiryInner>
        <InquiryContent>
          <InquiryTitle>CUSTOMER SEVICE</InquiryTitle>
          <InquirySection>
            <InquiryTable>

              <InquiryThead>
                <InquiryTr>
                  <InquiryTh>No.</InquiryTh>
                  <InquiryTh>제목</InquiryTh>
                  <InquiryTh>작성자</InquiryTh>
                </InquiryTr>
              </InquiryThead>
              <InquiryTbody>
                <InquiryTr>
                  <InquiryTd className="num">1</InquiryTd>
                  <InquiryTd>제목</InquiryTd>
                  <InquiryTd className="name">작성자</InquiryTd>
                </InquiryTr>
              </InquiryTbody>

            </InquiryTable>
          </InquirySection>
        </InquiryContent>
      </InquiryInner>
    </InquiryBase>
)}

const InquiryBase = styled.div`
background-color: #ddd6d0;
font-family: 'AppleSDGothicNeo';
`

const InquiryInner = styled.div`
margin: 0 auto;
`
const InquiryContent = styled.div`
margin-top: 50px;
`

const InquiryTitle = styled.h1`
width: 100%;
font-size: 18px;
font-weight: bold;
color: #333;
display: inline-block;
padding: 0 0 10px;
margin-left: 8px;
`

const InquirySection =styled.section`
border-top: 1px solid black;
width: 100%;
`


const InquiryTable =styled.table`
width: 100%;
font-size: 12px;
`
const InquiryThead = styled.thead`
display: table-header-group;
vertical-align: middle;
`
const InquiryTr = styled.tr`
display: table-row;
`

const InquiryTh =styled.th`
display: table-cell;
padding: 18px 10px;
text-align: center;
border-bottom: 1px solid #ddd;
background: #d1c9bf;
`

const InquiryTbody = styled.tbody`
display: table-row-group;
vertical-align: middle;
`

const InquiryTd = styled.td`
color: #666;
padding: 18px 10px;
border-bottom: 1px solid #ddd;
text-align: center;

&.num {
  width: 15%;
}
&.name {
  width: 20%;
}
`