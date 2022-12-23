import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Address from "./Address";
import axios from "axios";
import useIduser from "../../hooks/useIduser";

export default function MyInfo() {
  const idUser = useIduser()
  const [ userDatas, setUserDatas ] = useState({})

  const phoneNumbers = ['02', '031', '032', '033','041','042','043','044','051',
  '052','053','054','055','061','062','063','064','070','010','011','016','017','018','019']

  const [address, setAddress] = useState({
    postcode: '',
    defaultAddr: ''
  })

  useEffect(() => {
    axios.get('http://52.78.53.87:5000:5000/api/getuser', {params: {
      idUser: idUser
    }})
    .then((res) => {
      setUserDatas(res.data.data[0])
      setAddress({
        postcode: res.data.data[0].UserPostCode,
        defaultAddr: res.data.data[0].UserDefault
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const modiUser = async() => {
    let body = {
      ...userDatas, 
      UserDefault: address.defaultAddr, 
      UserPostCode: address.postcode
    }
    if (userDatas.UserName === '') {
      alert('이름을 입력해주세요.')
    } else if (userDatas.UserPw === '') {
      alert('비밀번호를 입력해주세요.')
    } else if (userDatas.UserRePw === '') {
      alert('비밀번호를 확인해주세요.')
    } else {
      try {
        const res = await axios.patch(
          'http://52.78.53.87:5000:5000/api/users', body)
          if(res.data.code === 200) {
            alert('수정이 완료되었습니다.')
          } else {
            alert('오류가 발생하였습니다.')
          }
      } catch (err) {
        console.log(err)
      }
    }
  }


  return(
    <MyInfoBase>
      <Inner>
        <Form>
          <FormContent>
            <FormLabel>
              <em>*</em> 이름
            </FormLabel>
            <InputContainer>
              <Input 
              id="name"
              type="text"
              value={userDatas.UserName}
              required
              onChange={
                (e)=>{setUserDatas((userDatas)=>({
                ...userDatas,
                UserName:e.target.value
                }))
              }}
              />
          </InputContainer>  
          </FormContent>

          <FormContent>
            <FormLabel>
              이메일
            </FormLabel>
            <InputContainer>
              <Input 
              id="email"
              type="text"
              value={userDatas.UserEmail}
              disabled
              />
          </InputContainer>  
          </FormContent>

          <FormContent>
            <FormLabel>
              <em>*</em> 비밀번호
            </FormLabel>
            <InputContainer>
              <Input 
              id="password"
              type="password"
              value={userDatas.UserPw}
              required
              onChange={
                (e)=>{setUserDatas((userDatas)=>({
                ...userDatas,
                UserPw:e.target.value
                }))
              }}
              />
          </InputContainer> 
          </FormContent>

          <FormContent>
            <FormLabel>
              <em>*</em> 비밀번호 확인
            </FormLabel>
            <InputContainer>
              <Input 
              id="repassword"
              type="password"
              value={userDatas.UserRePw}
              required
              onChange={
                (e)=>{setUserDatas((userDatas)=>({
                ...userDatas,
                UserRePw:e.target.value
                }))
              }}
              />
          </InputContainer> 
          </FormContent>

          <FormContent>
            <FormLabel>
              <em>*</em> 전화번호
            </FormLabel>
            <InputContainer style={{display: "flex"}}>
              <PhoneSelect 
              defaultValue={userDatas.UserPhone}
              onChange={
                (e)=>{setUserDatas((userDatas)=>({
                ...userDatas,
                UserPhone:e.target.value
                }))
              }}
              >
                {
                  phoneNumbers.map((phoneNumber) => (
                    <PhoneOption>{phoneNumber}</PhoneOption>
                  ))
                }
              </PhoneSelect>
              <Phone>
                <PhoneInput 
                id="phone"
                type="number"
                vlaue={userDatas.UserPhoneMid}
                required
                onChange={
                  (e)=>{setUserDatas((userDatas)=>({
                  ...userDatas,
                  UserPhoneMid:e.target.value
                  }))
                }}
                />
              </Phone>

              <Phone>
                <PhoneInput 
                id="phone"
                type="number"
                vlaue={userDatas.UserPhoneEnd}
                required
                onChange={
                  (e)=>{setUserDatas((userDatas)=>({
                  ...userDatas,
                  UserPhoneEnd:e.target.value
                  }))
                }}
                />
              </Phone>
            </InputContainer>
          </FormContent>

          <FormContent>
            <FormLabel>
              <em>*</em> 주소
            </FormLabel>
            <InputContainer style={{display: "flex"}}>
              <FormPostCode>{address.postcode}</FormPostCode>
              <Address setAddress={setAddress} />
            </InputContainer>
          </FormContent>

          <FormContent style={{marginTop: "-10px"}}>
            <FormLabel style={{fontSize: "11px", color: "#333", marginLeft: "40px"}}>
              기본주소
            </FormLabel>
            <InputContainer style={{display: "flex"}}>
              <FormPostCode style={{width: "100%", margin: "0"}}>{address.defaultAddr}</FormPostCode>
            </InputContainer>
          </FormContent>

          <FormContent>
            <FormLabel style={{fontSize: "11px", color: "#333", marginLeft: "40px"}}>
              나머지주소
            </FormLabel>
            <InputContainer>
              <Input 
                id="address"
                type="text"
                value={userDatas.UserDetail}
                required
                onChange={
                  (e)=>{setUserDatas((userDatas)=>({
                  ...userDatas,
                  UserDetail:e.target.value
                  }))
                }}
              />
            </InputContainer>
          </FormContent>

          <ModifyBtn 
          type="button"
          onClick={modiUser}
          >회원정보 수정하기</ModifyBtn>
        </Form>
      </Inner>
    </MyInfoBase>
  )
}

const MyInfoBase = styled.div`
@media ${props => props.theme.mobile} {
  margin: 0;
  padding-top: 0px;
}

`
const Inner = styled.div`
width: 700px;
margin: 35px auto 0;
display: flex;
justify-content: center;
align-items: center;
@media ${props => props.theme.mobile} {
  width: 370px;
  margin: 0 auto;
}
`
const Form = styled.form`
width: 400px;
@media ${props => props.theme.mobile} {
  width: 98%;
}
`

const FormContent = styled.div`
text-align: left;
display: flex;
margin: 20px 0;
`

const FormLabel = styled.label`
font-size: 14px;
padding: 0 5px;
font-size: 13px;
flex: 1;
margin-top: 8px;
> em {
  color: red;
}
`
const InputContainer = styled.div`
width: 75%;
text-align: left;
vertical-align: middle;

`
const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 2px;
  border: 1px solid #b4b4b4;
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

const FormPostCode = styled.div`
  width: 80px;
  height: 28px;
  margin-right: 11px;
  font-size: 14px;
  padding: 4px 3px;
  background: #fff;
`

const ModifyBtn = styled.button`
width: 100%;
height: 44px;
margin: 30px 30px;
font-size: 14px;
color: #46423f;
background-color: #c5bbb3;
&:hover {
  background-color: #807974;
  color: #f7f2f2;
}
@media ${props => props.theme.mobile} {
  margin: 0;
}


`