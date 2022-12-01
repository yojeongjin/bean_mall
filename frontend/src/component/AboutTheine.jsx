import React from 'react'
import styled from 'styled-components'


export default function AboutTheine() {

  return (
    <AboutBase>
      <Inner>
        <AboutContent>
          <Title>ABOUT</Title>
          <Content style={{marginBottom: '25px'}}>
          안녕하세요!<br></br>
          이 사이트는 실제 제품 판매 사이트가 아닙니다.
          </Content>

          <Content style={{marginBottom: '15px'}}>
          결제 기능은 자정에 모두 환불 되고 있으니 편하게 모든 기능들을 테스트 해보세요.<br></br>
          사이트에 궁금한 점이 있다면 언제든 연락주세요.
          </Content>

          <Content>
            이메일: osolku@naver.com
          </Content>
        </AboutContent>
      </Inner>
    </AboutBase>
  )
}


const AboutBase = styled.div`
background-color: #d2d2d2;
font-family: 'AppleSDGothicNeo';
`

const Inner = styled.div`
padding-top: 150px;
width: 1300px;
margin: 0 auto;
height: 150vh;
`

const AboutContent = styled.div`
margin: 0 auto;
padding-top: 80px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-family: 'Gortesque';
letter-spacing: 3px;
margin-bottom: 30px;
`

const Content = styled.p`
font-size: 14px;
font-weight: 200px;
line-height: 1.5;
text-align: center;
`