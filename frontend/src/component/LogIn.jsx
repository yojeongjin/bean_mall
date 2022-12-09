import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import kakao from '../assets/kakaoicon.png'

import { useDispatch } from 'react-redux'
import { loginAuth } from '../redux/actions/auth_actions'
import { REST_API_KEY, REDIRECT_URI } from '../kakaoAuth'

import { Mobile, Pc } from '../hooks/MediaQuery'

export default function LogIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const signin = (e) => {
    e.preventDefault();
    
    let body = {
      UserEmail: email,
      UserPw: password 
    }

    dispatch(loginAuth(body))
      .then(res => {
        if (res.payload.success === true) {
          const token = res.payload.result.jwt
          localStorage.setItem('m-access-token', token)
          window.location.replace('/')
        } else {
          alert(res.payload.msg)
        }
      })
  }

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      signin()
    }
  }

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const signinWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL
  }


  return (
    <>
      <Pc>    
        <SignInBase>
          <SignInInner>
            <SignInContent>
              <SignInTitle>
                <span>간편 로그인/회원가입</span>
              </SignInTitle>
              <SignInUpBtn 
              type="button" 
              style={{marginBottom: "0", paddingLeft: "20px"}} 
              onClick={signinWithKakao}>
                <SnsIcon></SnsIcon>카카오로 3초만에 시작하기
              </SignInUpBtn>
              <Link to="/signup">
                <SignInUpBtn className="email">이메일로 가입하기</SignInUpBtn>
              </Link>
            </SignInContent>
            
            <SignInContent onKeyPress={pressEnter} >

              <SignInTitle>
                <span>이메일 로그인</span>
              </SignInTitle>
              <EmailSignInContainer>
                <EmailInput
                  id="email"
                  type="email"
                  value={email}
                  placeholder="이메일"
                  required 
                  onChange={(e) => {setEmail(e.target.value)}} />
                <EmailInput 
                  id="password"
                  type="password"
                  value={password}
                  placeholder="비밀번호"
                  required
                  onChange={(e) => {setPassword(e.target.value)}} />
              </EmailSignInContainer>

              <SignInUpBtn onClick={signin}>로그인</SignInUpBtn>

            </SignInContent>
          </SignInInner>
        </SignInBase>
      </Pc>

      <Mobile>
        <SignInBase style={{margin: "0", border: "none"}}>
          <SignInInner style={{width:"370px"}}>
            <SignInContent>
              <SignInTitle>
                <span>간편 로그인/회원가입</span>
              </SignInTitle>
              <SignInUpBtn 
              type="button"
              style={{marginBottom: "0", paddingLeft: "20px"}}
              onClick={signinWithKakao}>
                <SnsIcon style={{left:"80px"}}></SnsIcon>카카오로 3초만에 시작하기
              </SignInUpBtn>
              <Link to="/signup">
                <SignInUpBtn className="email">이메일로 가입하기</SignInUpBtn>
              </Link>
            </SignInContent>
            
            <SignInContent onKeyPress={pressEnter} >

              <SignInTitle>
                <span>이메일 로그인</span>
              </SignInTitle>
              <EmailSignInContainer>
                <EmailInput
                  id="email"
                  type="email"
                  value={email}
                  placeholder="이메일"
                  required 
                  onChange={(e) => {setEmail(e.target.value)}} />
                <EmailInput 
                  id="password"
                  type="password"
                  value={password}
                  placeholder="비밀번호"
                  required
                  onChange={(e) => {setPassword(e.target.value)}} />
              </EmailSignInContainer>

              <SignInUpBtn onClick={signin}>로그인</SignInUpBtn>

            </SignInContent>
          </SignInInner>
        </SignInBase>
      </Mobile>
    </>
  )
}

const SignInBase = styled.div`
font-family: 'AppleSDGothicNeo';
margin-top: 50px;
border-top: 1px solid black;
`

const SignInInner = styled.div `
width: 390px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const SignInContent = styled.form`
position: relative;
width: 100%;
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const SignInTitle = styled.div`
border-top: 1px solid #595959;
color: #595959;
display: flex;
justify-content: center;
width: 90%;
> span {
  font-size: 12px;
  margin-top: -8px;
  background: #ddd6d0;
  width: 130px;
  text-align: center;
}
`

const EmailSignInContainer = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 2px;
  border: 1px solid #b4b4b4;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 14px;
  outline: none;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SignInUpBtn = styled.button`
width: 351px;
height: 47px;
margin: 30px 0;
font-size: 14px;
color: #595450;
background-color: #c5bbb3;
&:hover {
  background-color: #807974;
  color: #f7f2f2;
}

&.email {
  margin-top: 8px;
  background-color: transparent;
  border: 1px solid #807974;
  color: #595450;
  &:hover {
    background-color: #807974;
    color: #f7f2f2;
  }
}
`

const SnsIcon = styled.div`
position: absolute;
top: 50px;
left: 90px;
width: 24px;
height: 24px;
margin-left: 7px;
background-image: url(${kakao});
`
