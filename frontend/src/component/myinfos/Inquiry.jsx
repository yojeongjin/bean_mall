import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addToBoard } from '../../redux/actions/board_actions'
import useIduser from '../../hooks/useIduser'

export default function Inquiry() {
  const dispatch = useDispatch()

  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  const UserName = useSelector((state) => state.cart.userName)
  const idUser = useIduser()

  const addInquiry = () => {
    let body = {
      BoardTitle: title,
      BoardContents: content,
      UserName: UserName,
      idUser: idUser
    }

    dispatch(addToBoard(body))
    .then((res) => {
      alert(res.payload.msg)
      window.location.reload()
    })
  }

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
                    <input 
                      id="dd"
                      type="text"
                      required
                      onChange={(e) => {setTitle(e.target.value)}}
                    />
                  </WriteDd>
                </WriteDl>
              </FormWrap>

              <FormWrap>
                <WriteDl>
                  <WriteDt>
                    <label>내용</label>
                  </WriteDt>
                  <WriteDd>
                    <textarea onChange={(e) => {setContent(e.target.value)}}></textarea>
                  </WriteDd>
                </WriteDl>
              </FormWrap>
            </InquiryForm>

            <ButtonWrap>
              <InquiryBtn onClick={addInquiry}>문의하기</InquiryBtn>
            </ButtonWrap>

          </InquirySection>
        </InquiryContent>
      </InquiryInner>
    </InquiryBase>
  )
}

const InquiryBase = styled.div`
font-family: 'AppleSDGothicNeo';
`

const InquiryInner = styled.div`
margin: 0 auto;
@media ${props => props.theme.mobile} {
  width: 370px;
}
`

const InquiryContent = styled.div`
margin-top: 50px;
@media ${props => props.theme.mobile} {
  margin: 0;
}
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
@media ${props => props.theme.mobile} {
  > input {
    width: 100%;
  }
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