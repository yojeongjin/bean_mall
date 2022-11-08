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
      </HeaderInner>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
position: fixed;
top: 0;
width: 100%;
height: 50px;
z-index: 9;
background-color: rgb(21, 21, 21);
opacity: ${(props) => props.isActive ? 1 : 0};
transition: 0.5s ease;`

const HeaderInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
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
color: #989898;
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
color: #989898;
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