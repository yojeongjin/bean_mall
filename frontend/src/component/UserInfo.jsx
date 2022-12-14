import React, { useState } from 'react'
import styled from 'styled-components'
import Address from './myinfos/Address'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { Mobile,Pc } from '../hooks/MediaQuery'

export default function UserInfo() {
  const [active, setActive] = useState(true)
  const [ userDetail, setUserDetail ] = useState('')
  const [ userPhone, setUserPhone ] = useState(0)
  const [ userPhoneMid, setUserPhoneMid ] = useState(0)
  const [ userPhoneEnd, setUserPhoneEnd ] = useState(0)
  const phoneNumbers = ['02', '031', '032', '033','041','042','043','044','051',
  '052','053','054','055','061','062','063','064','070','010','011','016','017','018','019']
  const [address, setAddress] = useState({
    postcode: '',
    defaultAddr: ''
  })

  const idUser = useSelector((state) => state.join.userID)

  const modiUser = async() => {
    let body = {
      UserDetail: userDetail,
      UserPhone: userPhone,
      UserPhoneMid: userPhoneMid,
      UserPhoneEnd: userPhoneEnd,
      UserPostCode: address.postcode,
      UserDefault: address.defaultAddr,
      idUser: idUser
    }

    try {
      const res = await axios.patch(
        'https://www.theine.shop/api/users', body)
        if(res.data.code === 200) {
          alert(res.data.msg)
          window.location.replace('/')
        } else {
          alert('회원가입 도중 오류가 발생하였습니다.')
        }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Pc>
        <UserInfoBase>
          <UserInfoInner>
            <UserInfoContent>
              <UserInfoTitle>이메일로 가입하기</UserInfoTitle>
                <UserInfoStep>
                  <ul>
                    <li>1</li>
                    <li className={ active ? 'active' : '' }>2</li>
                  </ul>
                  <h1>추가 정보 입력하기</h1>
                </UserInfoStep>

                <FormContent>
                  <FormLabel>
                    주소
                  </FormLabel>
                  <FormPostCode>{address.postcode}</FormPostCode>
                  <Address setAddress={setAddress} />
                </FormContent>
                <FormContent style={{margin:"0 0", flexDirection: "column", marginLeft: "45px"}}>
                  <FormLabel style={{fontSize: "12px", marginLeft: "10px"}} >기본주소</FormLabel>
                  <FormPostCode style={{width: "340px", margin: "0 15px"}}>{address.defaultAddr}</FormPostCode>
                </FormContent>
                <FormContent style={{margin:"0 0", flexDirection: "column", marginLeft: "45px"}}>
                  <FormLabel style={{fontSize: "12px", marginLeft: "10px"}}>나머지주소</FormLabel>
                  <Input 
                    id="address"
                    type="text"
                    placeholder="선택 입력 가능"
                    required
                    onChange={(e) => {setUserDetail(e.target.value)}}
                  />
                </FormContent>

                <FormContent>
                  <FormLabel>
                    전화번호
                  </FormLabel>
                  <PhoneSelect onChange={(e) => setUserPhone(e.target.value)}>
                    {
                      phoneNumbers.map((phoneNumber) => (
                        <PhoneOption>{phoneNumber}</PhoneOption>
                      ))
                    }
                  </PhoneSelect>
                  <Phone>
                    <PhoneInput
                    id="phone"
                    type="text"
                    required
                    onChange={(e) => setUserPhoneMid(e.target.value)}
                    />
                  </Phone>
                  <Phone>
                    <PhoneInput
                    id="phone"
                    type="text"
                    required
                    onChange={(e) => setUserPhoneEnd(e.target.value)}
                    />
                  </Phone>
                </FormContent>
                <SignUpBtn type="button" onClick={() => {modiUser()}}>회원가입 완료</SignUpBtn>
                <SignUpBtn
                type="button" 
                style={{marginTop: "10px", backgroundColor: "transparnet", border: "1px solid #807974", color: "#595450"}}
                onClick={() => {window.location.replace('/')}}>
                  다음에 작성할게요.
                </SignUpBtn>
            </UserInfoContent>
          </UserInfoInner>
        </UserInfoBase>
      </Pc>

      <Mobile>
        <UserInfoBase>
          <UserInfoInner style={{width: "370px"}}>
            <UserInfoContent>
              <UserInfoTitle>이메일로 가입하기</UserInfoTitle>
                <UserInfoStep>
                  <ul>
                    <li>1</li>
                    <li className={ active ? 'active' : '' }>2</li>
                  </ul>
                  <h1>추가 정보 입력하기</h1>
                </UserInfoStep>

                <FormContent>
                  <FormLabel>
                    주소
                  </FormLabel>
                  <FormPostCode>{address.postcode}</FormPostCode>
                  <Address setAddress={setAddress} />
                </FormContent>
                <FormContent style={{margin:"0 0", flexDirection: "column", marginLeft: "45px"}}>
                  <FormLabel style={{fontSize: "12px", marginLeft: "10px"}} >기본주소</FormLabel>
                  <FormPostCode style={{width: "310px", margin: "0 15px"}}>{address.defaultAddr}</FormPostCode>
                </FormContent>
                <FormContent style={{margin:"0 0", flexDirection: "column", marginLeft: "45px"}}>
                  <FormLabel style={{fontSize: "12px", marginLeft: "10px"}}>나머지주소</FormLabel>
                  <Input 
                    id="address"
                    type="text"
                    placeholder="선택 입력 가능"
                    required
                    onChange={(e) => {setUserDetail(e.target.value)}}
                    style={{width: "95%"}}
                  />
                </FormContent>

                <FormContent>
                  <FormLabel>
                    전화번호
                  </FormLabel>
                  <PhoneSelect onChange={(e) => setUserPhone(e.target.value)}>
                    {
                      phoneNumbers.map((phoneNumber) => (
                        <PhoneOption>{phoneNumber}</PhoneOption>
                      ))
                    }
                  </PhoneSelect>
                  <Phone>
                    <PhoneInput
                    id="phone"
                    type="text"
                    required
                    onChange={(e) => setUserPhoneMid(e.target.value)}
                    />
                  </Phone>
                  <Phone>
                    <PhoneInput
                    id="phone"
                    type="text"
                    required
                    onChange={(e) => setUserPhoneEnd(e.target.value)}
                    />
                  </Phone>
                </FormContent>
                <BtnWrap>
                  <SignUpBtn style={{margin: "15px 0 0"}} type="button" onClick={modiUser}>회원가입 완료</SignUpBtn>
                  <SignUpBtn
                    type="button" 
                    style={{margin: "15px 0 0", backgroundColor: "#c5bbb3", color: "#333"}}
                    onClick={() => {window.location.replace('/')}}>
                    다음에 작성할게요.
                  </SignUpBtn>
                </BtnWrap>
            </UserInfoContent>
          </UserInfoInner>
        </UserInfoBase>
      </Mobile>
    </>
  )
}


const UserInfoBase = styled.div`
font-family: 'AppleSDGothicNeo';
`

const UserInfoInner = styled.div`
width: 390px;
height: 100vh;
margin: 0 auto;
padding-top: 50px;
`
const UserInfoContent =styled.div`
margin-top: 50px;
border-top: 1px solid #333;
padding-bottom: 100px;
text-align: center;

`

const UserInfoTitle = styled.h2`
position: relative;
font-size: 14px;
color: #333;
text-align: center;
top: -10px;
background: #ddd6d0;
display: inline-block;
padding: 0 10px;
`
const UserInfoStep = styled.div`
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
`

const FormContent = styled.div`
  text-align: left;
  display: flex;
  margin: 8px 0;
`

const FormLabel = styled.label`
  font-size: 14px;
  padding: 5px 5px;
  margin-right: 13px;
`

const FormPostCode = styled.div`
  width: 80px;
  height: 28px;
  border: 1px solid #aaa;
  margin: 0 11px;
  font-size: 14px;
  padding: 4px 3px;
  background: #fff;
`

const Input = styled.input`
  width: 100%;
  height: 28px;
  border-radius: 2px;
  border: 1px solid #aaa;
  margin: 0 0 8px 15px;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
`

const PhoneSelect = styled.select`
  width: 70px;
  height: 28px;
  font-size: 12px;
  margin-right: 7px;
  border: 1px solid #aaa;
`
const PhoneOption = styled.option``

const Phone = styled.div`
position: relative;
&::before {
  content: "";
  width: 8px;
  height: 1px;
  background-color: black;
  position: absolute;
  top: -10px;
  bottom: 0;
  margin: auto 0;
}
`
const PhoneInput = styled.input`
width: 65px;
height: 28px;
border-radius: 2px;
border: 1px solid #aaa;
display: flex;
justify-content: center;
margin: 0 15px 8px 15px;
padding: 0 10px;
font-size: 12px;
outline: none;
&:first-child {
  margin-right: 10px;
}
`
const SignUpBtn = styled.button`
width: 100%;
height: 44px;
margin: 20px 0 0 15px;
font-size: 14px;
color: #eee;
background-color: #443f3c;
&:hover {
  background-color: #807974;
  color: #f7f2f2;
}
`
const BtnWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`