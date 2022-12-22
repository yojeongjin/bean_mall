import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import check from '../assets/check-mark.png'
import checked from '../assets/checked.png'

import { joinAuth } from '../redux/actions/join_actions'


export default function Join ({match}) {
  const [active] = useState(true)
  const [check, setCheck] = useState(false)
  const [UserEmail, setUserEmail] = useState('')
  const [pw, setPw] = useState('')
  const [rePw, setRePw]  = useState('')
  const [name, setName] = useState('')

  const dispatch = useDispatch()
  
  const join = () => {

    let body = {
      UserEmail: UserEmail,
      UserPw: pw,
      UserRePw: rePw,
      UserName: name
    }

    if(check === false) {
      alert('이메일 중복확인을 해주세요.')
    } else {
      dispatch(joinAuth(body))
      .then((res) => {
        if (res.payload.code === 200) {
          const token = res.payload.result.jwt
          localStorage.setItem('m-access-token', token)
          alert(res.payload.msg)
          window.location.href = `${match.url}/userinfo`
        } else {
          alert(res.payload.msg)
        }
      })
    }
  }

  const checkEmail = async() => {
    try {
      const res = await axios.get(
        'http://52.78.53.87:5000/api/users', {params: {UserEmail: UserEmail }})
        if(res.data.code === 400) {
          alert(res.data.msg)
        } else {
          alert(res.data.msg)
          setCheck(true)
        }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SignUpBase>
      <SignUpInner>
        <SignUpContent>
          <SignUpTitle>이메일로 가입하기</SignUpTitle>

          <SignUpStep>
            <ul>
              <li className={ active ? 'active' : '' }>1</li>
              <li >2</li>
            </ul>
            <h1>가입 정보 입력하기</h1>
          </SignUpStep>
          
          <FormContent>
            <FormLabel>
              <em>*</em> 이메일
            </FormLabel>
          </FormContent>

          <InputContainer>
            <Input 
            id="email"
            type="email"
            value={UserEmail}
            placeholder="이메일을 입력해주세요."
            required
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            />
          </InputContainer>
          <EmailCheck onClick={checkEmail}>
            <CheckIcon isCheck = {check}></CheckIcon>이메일 중복확인
          </EmailCheck>

          <FormContent>
            <FormLabel>
              <em>*</em> 비밀번호
            </FormLabel>
          </FormContent>

          <InputContainer>
            <Input 
            id="password"
            type="password"
            value={pw}
            placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
            required
            onChange={(e) => {
              setPw(e.target.value);
            }}
            />
          </InputContainer>          
          <InputContainer>
            <Input 
            id="repassword"
            type="password"
            value={rePw}
            placeholder="비밀번호 확인"
            required
            onChange={(e) => {
              setRePw(e.target.value);
            }}
            />
          </InputContainer>

          <FormContent>
            <FormLabel>
              <em>*</em> 이름
            </FormLabel>
          </FormContent>
          <InputContainer>
            <Input 
            id="name"
            type="text"
            value={name}
            placeholder="이름을 입력해 주세요."
            required
            onChange={(e) => {
              setName(e.target.value)
            }}
            />
          </InputContainer>

          <SignUpBtn type="button" onClick={join}>회원가입하기</SignUpBtn>

        </SignUpContent>
      </SignUpInner>
    </SignUpBase>
  )
}

const SignUpBase = styled.div `
font-family: 'AppleSDGothicNeo';
`

const SignUpInner = styled.div`
width: 390px;
margin: 0 auto;
padding-top: 50px;
@media ${props => props.theme.mobile} {
  width: 370px;
}
`
const SignUpContent =styled.div`
margin-top: 50px;
border-top: 1px solid #333;
padding-bottom: 100px;
text-align: center;
`

const SignUpTitle = styled.h2`
font-size: 14px;
color: #333;
text-align: center;
position: relative;
top: -10px;
background: #ddd6d0;
display: inline-block;
padding: 0 10px;

`

const SignUpStep = styled.div`
text-align: center;
margin: 45px 0 20px;
text-align: center;
margin: 45px 0 20px;
  ul {
    display: inline-block;
    position: relative;
    border-top: 1px solid #aaa;
  }
  li {
    position: relative;
    top: -15px;
    z-index: 10;
    background: #fff;
    color: #c8c8c8;
    border: 1px solid #c8c8c8;
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    &.active {
      background: #807974;
    }
  }
  li + li {
    margin-left: 50px;
  }

`;


const FormContent = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const FormLabel = styled.label`
  font-size: 14px;
  padding: 0 5px;
  > em {
    color: red;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 2px;
  border: 1px solid #b4b4b4;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SignUpBtn = styled.button`
width: 100%;
height: 44px;
margin: 30px 0;
font-size: 14px;
color: #46423f;
background-color: #c5bbb3;
&:hover {
  background-color: #807974;
  color: #f7f2f2;
}
`

const EmailCheck = styled.div`
display: flex;
text-align: left;
padding: 5px 10px;
font-size: 14px;
cursor: pointer;
`

const CheckIcon = styled.div`
background-image: ${(props) => props.isCheck ? `url(${checked})` : `url(${check})`}; 
width: 16px;
height: 16px;
margin-right: 5px
`
