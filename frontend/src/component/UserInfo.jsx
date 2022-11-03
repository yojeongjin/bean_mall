import React, { useState } from 'react'
import styled from 'styled-components'
import Address from './Address'



export default function UserInfo() {
  const [active, setActive] = useState(true)

  const [address, setAddress] = useState({
    postcode: '',
    defaultAddr: ''
  })
  return (
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
            <FormContent className="default_address">
              <FormLabel className="default_label">기본주소</FormLabel>
              <FormPostCode className="default_code">{address.defaultAddr}</FormPostCode>
            </FormContent>
            <FormContent className="default_address">
              <FormLabel className="default_label">나머지주소</FormLabel>
              <Input 
                id="address"
                type="text"
                placeholder="선택 입력 가능"
                required
              />
            </FormContent>
        </UserInfoContent>
      </UserInfoInner>
    </UserInfoBase>
  )
}


const UserInfoBase = styled.section`
background-color: #ddd6d0;
`

const UserInfoInner = styled.div`
width: 390px;
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
font-size: 14px;
color: #333;
text-align: center;
position: relative;
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
`;

const FormContent = styled.div`
  text-align: left;
  margin: 10px 0 0;
  display: flex;
  &.default_address{
    flex-direction: column;
    margin-left: 45px;
  }
`;

const FormLabel = styled.label`
  font-size: 14px;
  padding: 5px 5px;
  &.default_label {
    font-size: 12px;
  }
  > em {
    color: red;
  }
`;

const FormPostCode = styled.div`
  width: 80px;
  height: 28px;
  border: 1px solid #333;
  margin: 0 11px;
  font-size: 14px;
  padding: 4px 3px;

  &.default_code {
    width: 345px;
    margin: 0 0;
  }
`

const Input = styled.input`
  width: 100%;
  height: 28px;
  border-radius: 2px;
  border: 1px solid #333;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
`;

