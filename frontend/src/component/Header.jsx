import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logoname.png'
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
    console.log(scroll)
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
        <HeaderLogo>
          {/* <Link to="/"><HeaderLogoImg src={logo}  alt="로고" /></Link> */}
        </HeaderLogo>

        <SubMenu>
          <MenuList>
            <MenuItems>
              <Link to="/"><MenuItemsSpan>Sign In</MenuItemsSpan></Link>
            </MenuItems>
            <MenuItems>
              <Link to="/"><MenuItemsSpan>My Page</MenuItemsSpan></Link>
            </MenuItems>
            <MenuItems>
              <Link to="/"><MenuItemsSpan>Cart</MenuItemsSpan></Link>
            </MenuItems>
          </MenuList>
        </SubMenu>
      </HeaderInner>

      <MainMenuList>
        <li>
          <Link to="/"><MainMenuSpan>스킨케어</MainMenuSpan></Link>
          <Link to="/"><MainMenuSpan>바디&핸드</MainMenuSpan></Link>
          <Link to="/"><MainMenuSpan>헤어</MainMenuSpan></Link>
          <Link to="/"><MainMenuSpan>향수</MainMenuSpan></Link>
        </li>
      </MainMenuList>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
background-color: #f6f5f0;
position: fixed;
top: 0;
width: 100%;
height: 80px;
z-index: 9;
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

const HeaderLogo = styled.div`
position: absolute;
top: 0px;
`

// const HeaderLogoImg = styled.img`
// width: 80%;
// `

const SubMenu = styled.div`
position: absolute;
top: 0px;
right: -30px;
display: flex;
`

const MenuList = styled.ul`
display: flex;`

const MenuItems = styled.li`
position: relative;
&::before {
  content: "";
  width: 1px;
  height: 12px;
  background-color: #c8c8c8;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
&:first-child:before {
  display: none;
}
`


const MenuItemsSpan = styled.span`
font-family: 'Nanum Barun Gothic', sans-serif;
font-size: 13px;
text-decoration: none;
padding: 11px 16px;
display: block;
color: #656565;
&:hover {
  color: black;
}
`


const MainMenuList = styled.ul`
min-width: 1100px;
margin-top: 80px;
padding: 5px 0;
background-color: #242424;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
display: flex;
margin-bottom: 5px;
`
const MainMenuSpan = styled.span`
font-family: 'Nanum Barun Gothic', sans-serif;
padding: 10px 20px 0 20px;
font-size: 14px;
text-decoration: none;
color: #c8c8c8;
font-weight: 400;
line-height: 1.4;
`