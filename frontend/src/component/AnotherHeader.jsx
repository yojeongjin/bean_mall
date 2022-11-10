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
            <Link to="/mypage"><MenuListSpan>My Page</MenuListSpan></Link>
            <Link to="/signin"><MenuListSpan>Login</MenuListSpan></Link>
            <Link to="/cart">
              <MenuListSpan>Cart
                <span className="cart-num">0</span>
              </MenuListSpan>
            </Link>
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
background-color: rgb(246, 245, 240, 0.5);
font-family: 'AppleSDGothicNeo';
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
position: relative;
font-size: 12px;
text-decoration: none;
padding: 0 20px;
text-align: center;
display: block;
&:hover {
  color: black;
}
  > .cart-num {
    position: absolute;
    top: -6px;
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 11px;
    text-align: center;
    background: #000;
    color: #fff;
    border-radius: 50%;
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
position: relative;
font-size: 12px;
text-decoration: none;
padding: 0 20px;
text-align: center;
display: inline-block;
&:hover {
  color: black;
}

`