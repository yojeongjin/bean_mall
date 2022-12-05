import React from 'react'
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
                  <FooterItem>About</FooterItem>
                  <FooterItem>GitHub</FooterItem>
                  <FooterItem>Blog</FooterItem>
                </FooterList>
              </FooterNav>
            </FooterContent>
          </FooterInner>
        </FooterBase>
      </Pc>
      <Mobile>
        <FooterBase style={{fontSize:"13px"}}>
          <FooterInner style={{width:"380px"}}>
            <FooterContent style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "15px"}}>
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
`

const FooterInner = styled.div`
width: 1100px;
height: 70px;
margin: 0 auto;
`

const FooterContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-top: 25px;
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