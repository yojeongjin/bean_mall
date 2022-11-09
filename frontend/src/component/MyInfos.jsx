import React, { useState } from 'react'
import styled from 'styled-components'
import Address from './Address'
import OrderCheck from './OrderCheck'


export default function MyInfos() {
  const phoneNumbers = ['02', '031', '032', '033','041','042','043','044','051',
  '052','053','054','055','061','062','063','064','070','010','011','016','017','018','019']
  const [address, setAddress] = useState({
    postcode: '',
    defaultAddr: ''
  })

  const [openForm, setOpenForm] = useState(true)
  const [openCheck, setOpenCheck] = useState(false)


  const goToForm = () => {
    setOpenForm(true)
    setOpenCheck(false)
  }
  const goToCheck = () => {
    setOpenForm(false)
    setOpenCheck(true)
  }

  return (
    <MyInfoBase>
      <MyInfoInner>

        <MyInfoMenu>
          <MyInfoNav>
            <MyInfoB>
              <span>회원정보</span>
            </MyInfoB>
            <MyInfoSpan onClick={goToForm}>회원 정보 수정</MyInfoSpan>

            <MyInfoB>
              <span>주문내역</span>
            </MyInfoB>
            <MyInfoSpan onClick={goToCheck}>주문조회</MyInfoSpan>
            <MyInfoSpan>상품리뷰</MyInfoSpan>

            <MyInfoB>
              <span>관심리스트</span>
            </MyInfoB>
            <MyInfoSpan>장바구니</MyInfoSpan>
            <MyInfoSpan>최근 본 상품</MyInfoSpan>


            <MyInfoB>
              <span>고객서비스</span>
            </MyInfoB>
            <MyInfoSpan>자주 묻는 질문</MyInfoSpan>
            <MyInfoSpan>1:1 문의하기</MyInfoSpan>
            <MyInfoSpan>상품문의내역</MyInfoSpan>

          </MyInfoNav>
        </MyInfoMenu>

        <InfoSection>
          {openCheck && <OrderCheck />}

          {openForm && 

          <Form>
            <FormContent>
              <FormLabel>
                <em>*</em> 이름
              </FormLabel>
              <InputContainer>
                <Input 
                id="name"
                type="text"
                required
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
                required
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
                required
                />
            </InputContainer> 
            </FormContent>

            <FormContent>
              <FormLabel>
                <em>*</em> 전화번호
              </FormLabel>
              <InputContainer className="post">
                <PhoneSelect>
                  {
                    phoneNumbers.map((phoneNumber) => (
                      <PhoneOption>{phoneNumber}</PhoneOption>
                    ))
                  }
                </PhoneSelect>
                <Phone>
                  <PhoneInput />
                </Phone>

                <Phone>
                  <PhoneInput />
                </Phone>
              </InputContainer>
            </FormContent>

            <FormContent>
              <FormLabel>
                <em>*</em> 주소
              </FormLabel>
              <InputContainer className="post">
                <FormPostCode>{address.postcode}</FormPostCode>
                <Address setAddress={setAddress} />
              </InputContainer>
            </FormContent>

            <FormContent className="default_address">
              <FormLabel className="default_label">
                기본주소
              </FormLabel>
              <InputContainer className="post">
                <FormPostCode className="default_code">{address.defaultAddr}</FormPostCode>
              </InputContainer>
            </FormContent>

            <FormContent>
              <FormLabel className="default_label">
                나머지주소
              </FormLabel>
              <InputContainer>
                <Input 
                  id="address"
                  type="text"
                  required
                />
              </InputContainer>
            </FormContent>

            <ModifyBtn type="submit">회원정보 수정하기</ModifyBtn>
          </Form>
        }
        </InfoSection>
      </MyInfoInner>
    </MyInfoBase>
  )
}

const MyInfoBase = styled.div`
background-color: #ddd6d0;
`
const MyInfoInner = styled.div`
width: 1100px;
height: 100vh;
margin: 0 auto;
position: relative;
display: flex;
> * {
  float: left;
}
`

const MyInfoMenu = styled.aside`
width: 25%;
height: 70%;
margin-top: 100px;
`

const InfoSection = styled.section`
  margin: 100px 0 0 20px;
  width: 74%;
`;

const MyInfoNav = styled.nav`
  margin-top: 50px;
  padding-bottom: 11px;
  text-align: center;
`;

const MyInfoB = styled.b`
  display: block;
  padding-top: 15px;
  color: #333;
  font-weight: bold;
  font-size: 13px;
  margin-top: 0;
`;

const MyInfoSpan = styled.span`
  font-size: 12px;
  color: #666;
  display: block;
  margin: 5px 0 7px 0;
  cursor: pointer;
`;

const Form = styled.form`
margin: 50px 100px;
width: 400px;
`
const FormContent = styled.div`
  text-align: left;
  display: flex;
  margin: 20px 0;
  &.default_address{
    margin-top: -10px;
  }
`;

const FormLabel = styled.label`
  font-size: 14px;
  padding: 0 5px;
  font-size: 13px;
  flex: 1;
  margin-top: 8px;
  &.default_label {
    font-size: 11px;
    color: #333;
    margin-left: 40px;
  }
  > em {
    color: red;
  }
`;

const InputContainer = styled.div`
  width: 75%;
  text-align: left;
  vertical-align: middle;
  &.post {
    display: flex;
  }
`;

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
`;

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
  &.default_code {
    width: 100%;
    margin: 0;
  }
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
`