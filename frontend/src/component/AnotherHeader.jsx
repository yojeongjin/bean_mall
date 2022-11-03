import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logoname.png'
import { Link } from 'react-router-dom'

export default function AnotherHeader() {
  return (
    <AnotherHeaderBase>
      <AnotherHeaderInner>
        <HeaderSub>
          <HeaderSubList>
            <Link to="/"><HeaderSubSpan>Main</HeaderSubSpan></Link>
            <Link to="/product"><HeaderSubSpan>Products</HeaderSubSpan></Link>
            <Link to="/perfumeinfo"><HeaderSubSpan>Flavours</HeaderSubSpan></Link>
          </HeaderSubList>
        </HeaderSub>

        <AnotherHeaderLogo>
          <Link to="/"><AnotherHeaderLogoImg src={logo}  alt="로고" /></Link>
        </AnotherHeaderLogo>

        <HeaderMain>
          <HeaderMainList>
            <Link to="/signin"><MenuListSpan>Sign In</MenuListSpan></Link>
            <Link to="/"><MenuListSpan>My Page</MenuListSpan></Link>
            <Link to="/"><MenuListSpan>Cart</MenuListSpan></Link>
          </HeaderMainList>
        </HeaderMain>

      </AnotherHeaderInner>
    </AnotherHeaderBase>
  )
}

const AnotherHeaderBase = styled.header`
position: fixed;
top: 0;
width: 100%;
height: 50px;
z-index: 9;
font-family: 'Noto Sans KR';
`


const AnotherHeaderInner = styled.div`
width: 1100px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const AnotherHeaderLogo = styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;
`

const AnotherHeaderLogoImg = styled.img`
width: 100px;
`

const HeaderMain = styled.ul`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
color: #333;
`

const HeaderMainList = styled.li`
display: flex;
`

const MenuListSpan = styled.span`
font-size: 12px;
text-decoration: none;
padding: 0 20px;
text-align: center;
display: block;
&:hover {
  font-weight: 500;
}
`

const HeaderSub = styled.ul`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
color: #333;
`

const HeaderSubList = styled.li`
display: flex;
`

const HeaderSubSpan = styled.span`
font-size: 12px;
text-decoration: none;
padding: 0 20px;
text-align: center;
display: block;
&:hover {
  font-weight: 500;
}
`