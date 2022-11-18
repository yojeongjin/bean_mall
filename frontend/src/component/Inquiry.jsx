import React from 'react'
import styled from 'styled-components'


export default function Inquiry() {
  return (
    <InquiryBase>
      <InquiryInner>
        <InquiryContent>
          <InquiryTitle>CUSTOMER SEVICE</InquiryTitle>
          <InquirySection>
            <InquiryForm>

              <FormWrap>
                <WriteDl>
                  <WriteDt>
                    <label>제목</label>
                  </WriteDt>
                  <WriteDd>
                    <input></input>
                  </WriteDd>
                </WriteDl>
              </FormWrap>

              <FormWrap>
                <WriteDl>
                  <WriteDt>
                    <label>내용</label>
                  </WriteDt>
                  <WriteDd>
                    <textarea></textarea>
                  </WriteDd>
                </WriteDl>
              </FormWrap>
            </InquiryForm>

            <ButtonWrap>
              <InquiryBtn>문의하기</InquiryBtn>
            </ButtonWrap>

          </InquirySection>
        </InquiryContent>
      </InquiryInner>
    </InquiryBase>
  )
}

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

const InquiryForm =styled.form`
`
const FormWrap = styled.div`
border-bottom: 1px solid #c5c5c5;
`

const WriteDl = styled.dl`
display: flex;
`
const WriteDt = styled.dt`
display: block;
background: #d1c9bf;
float: left;
width: 12%;

> label {
  font-size: 13px;
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 0;
}

`
const WriteDd = styled.dd`
width: 85%;
display: block;
margin: 0 auto;
padding: 10px 0;
float: right;

> input {
  width: 80%;
  height: 40px;
  outline: none;
  font-size: 13px;
  border: 1px solid #bbb;
}

> textarea {
  width: 100%;
  height: 300px;
  outline: none;
  resize: none;
  border: 1px solid #bbb;
}
`

const ButtonWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const InquiryBtn = styled.button`
padding: 0 18px;
margin: 15px 0;
height: 38px;
font-size: 12px;
background: #484847;
color: #fff;
`