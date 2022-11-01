import styled from 'styled-components'

export default function SignUp() {
  return (
    <SignUpBase>
      <SignUpInner>
        <SignUpContent>
          <SignUpTitle>이메일로 가입하기</SignUpTitle>

          <SignUpStep>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
            <h1>가입 정보 입력하기</h1>
          </SignUpStep>
          
          <FormContent>
            <FormLabel>
              <em>*</em> 이메일
            </FormLabel>
          </FormContent>

          <InputContainer>
            <EmailInput 
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            required
            />
          </InputContainer>

          <FormContent>
            <FormLabel>
              <em>*</em> 비밀번호
            </FormLabel>
          </FormContent>

          <InputContainer>
            <EmailInput 
            id="password"
            type="password"
            placeholder="비밀번호 (영문+숫자 8자 이상)"
            required
            />
          </InputContainer>          
          <InputContainer>
            <EmailInput 
            id="repassword"
            type="password"
            placeholder="비밀번호 확인"
            required
            />
          </InputContainer>

          <FormContent>
            <FormLabel>
              <em>*</em> 이름
            </FormLabel>
          </FormContent>
          <InputContainer>
            <EmailInput 
            id="repassword"
            type="text"
            placeholder="이름을 입력해 주세요."
            required
            />
          </InputContainer>
        </SignUpContent>
        <SignUpBtn>회원가입하기</SignUpBtn>
      </SignUpInner>
    </SignUpBase>
  )
}

const SignUpBase = styled.section`
background-color: #ddd6d0;
`

const SignUpInner = styled.div`
width: 390px;
height: 100vh;
margin: 0 auto;
padding-top: 50px;
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
    background: ${(props) => props.isActive ? '#807974' : '#fff'};
    color: #c8c8c8;
    border: 1px solid #c8c8c8;
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
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
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
`;

const EmailInput = styled.input`
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

const SignUpBtn = styled.btn`

`