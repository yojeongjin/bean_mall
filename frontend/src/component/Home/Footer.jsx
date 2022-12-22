import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import { Mobile, Pc } from '../../hooks/MediaQuery'


export default function Footer() {
  return (
    <>
      <Pc>
        <FooterBase>
          <FooterInner>
            <FooterContent>
              <FooterCopyRight>
                <h1>© 2022 Theine. All rights reserved.</h1>
              </FooterCopyRight>
              <FooterNav>
                <FooterList>
                  <FooterItem><Link to="/about">About</Link></FooterItem>
                  <FooterItem>GitHub</FooterItem>
                  <FooterItem>Blog</FooterItem>
                </FooterList>
              </FooterNav>
            </FooterContent>
          </FooterInner>
        </FooterBase>
      </Pc>
      <Mobile>
        <FooterBase>
          <FooterInner>
            <FooterContent>
              <FooterNav>
                <FooterList>
                  <FooterItem>About</FooterItem>
                  <FooterItem>GitHub</FooterItem>
                  <FooterItem>Blog</FooterItem>
                </FooterList>
              </FooterNav>
              <FooterCopyRight style={{marginTop: "10px"}}>
                <h1>© 2022 Theine. All rights reserved.</h1>
              </FooterCopyRight>
            </FooterContent>
          </FooterInner>
        </FooterBase>
      </Mobile>
    </>
  )
}

const FooterBase = styled.footer`
background-color: #D8D0CD;
border-top: 1px dashed black;
font-family: 'AppleSDGothicNeo';
font-size: 14px;
@media ${props => props.theme.mobile} {
  font-size: 13px;
}
`

const FooterInner = styled.div`
width: 1100px;
height: 70px;
margin: 0 auto;

@media ${props => props.theme.mobile} {
  width: 380px;
}
`

const FooterContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-top: 25px;

@media ${props => props.theme.mobile} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
}
`

const FooterCopyRight = styled.div`

`

const FooterNav = styled.div`

`

const FooterList = styled.ul`
display: flex;
`

const FooterItem = styled.li`
padding: 0 15px;
`