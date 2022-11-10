import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoname.png'
import styled from 'styled-components'

export default function Header() {
  const [scroll, setScroll] = useState(0)

  const throttle = (callback, delay) => {
    let timer = null;

    return() => {
      if (timer) return

      timer = setTimeout(() => {
        callback()
        timer = null
      }, delay)
    }
  }

  const handleScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop)
  }

  const updateScroll = throttle(handleScroll, 300);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
    return () => {
      window.removeEventListener("scroll", updateScroll);
    }
  })

  return (
    <HeaderBase  isActive = {scroll <= 80}>
      <HeaderInner>
          <HeaderMain>
            <HeaderMainList>
              <Link to="/"><MenuListSpan>Main</MenuListSpan></Link>
              <Link to="/product"><MenuListSpan>Products</MenuListSpan></Link>
              <Link to="/perfumeinfo"><MenuListSpan>Flavours</MenuListSpan></Link>
            </HeaderMainList>
          </HeaderMain>
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
      </HeaderInner>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
font-family: 'AppleSDGothicNeo';
position: fixed;
top: 0;
width: 100%;
height: 50px;
z-index: 9;
background-color: #f6f5f0;
// background-color: #181818;
opacity: ${(props) => props.isActive ? 1 : 0};
transition: 0.5s ease;`

const HeaderInner = styled.div`
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
flex:1;
display: flex;
color: #333;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
`

const HeaderMainList = styled.li`
display: flex;
`

const MenuListSpan = styled.span`
position: relative;
text-decoration: none;
padding: 0 20px;
text-align: center;

&:hover {
  color: black;
}

>.cart-num {
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