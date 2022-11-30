import React from 'react'
import styled from 'styled-components'


export default function Footer() {
  return (
    <FooterBase>
      <FooterInner>
        <FooterCopyRight>
          <h1>Theine</h1>
          <div className='h4'>
            <h4>•Theine•</h4>
            <h4>president: O</h4>
          </div>
          <p>License 12345678 2022-Yongin- 1234</p>
          <p>000 - 1234 - 5678</p>
          <p>theine@gmail.com</p>
          <p>© 2022 Theine . All rights reserved.</p>
        </FooterCopyRight>
      </FooterInner>
    </FooterBase>
  )
}

const FooterBase = styled.footer`
background-color: #766d67;
font-family: 'AppleSDGothicNeo';
font-size: 12px;
color: #bcb6b1;
`

const FooterInner = styled.div`
width: 1300px;
height: 200px;
margin: 0 auto;
`

const FooterCopyRight = styled.div`
padding: 50px 0 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
>h1 {
  font-family: 'Orelo';
  font-size: 32px;
}

> div {
  font-family: 'Orelo';
  margin-bottom: 5px;
  display: flex;
  > h4 {
    padding: 2px 7px;
  }
}

> p {
  &:last-child {
    color: #333;
  }
}
`