import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoname.png'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../../redux/actions/auth_actions'
import { persistor } from '../../redux/create'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'

import { Mobile, Pc } from '../../hooks/MediaQuery'

import Hamburger from './Hamburger'



export default function Header() {

  const [scroll, setScroll] = useState(0)
  const dispatch = useDispatch()
  const countCartItem = useSelector((state)=> state.cart.cart)
  const token = useSelector((state) => state.auth.token)

  const logout = () => {
    dispatch(logoutAuth({
      headers: { 'm-access-token': token }
    }))
    .then(res => {
      if (res.payload.success === true) {
        localStorage.removeItem('m-access-token', token)
        persistor.purge()
        window.location.replace('/')
      }
    })
  }

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
  },[])

  
	if (useLocation().pathname === '/') {
    return (
      <Hamburger />
    )
  } else {
    if (token === null) {
      return (
        <>
          <Pc>
            <HeaderBase  isActive = {scroll <= 80} isHome = {window.location.pathname === '/'} >
              <HeaderInner>
                  <HeaderMain>
                    <HeaderMainList><Link to="/about"><MenuListSpan>About</MenuListSpan></Link></HeaderMainList>
                    <HeaderMainList><Link to="/product"><MenuListSpan>Products</MenuListSpan></Link></HeaderMainList>
                    <HeaderMainList><Link to="/perfumeinfo"><MenuListSpan>Flavours</MenuListSpan></Link></HeaderMainList>
                  </HeaderMain>
                  <AnotherHeaderLogo>
                    <Link to="/"><AnotherHeaderLogoImg src={logo}  alt="로고" /></Link>
                  </AnotherHeaderLogo>
                  <HeaderMain>
                    <HeaderMainList><Link to="/mypage"><MenuListSpan>My Page</MenuListSpan></Link></HeaderMainList>
                    <HeaderMainList><Link to="/signin"><MenuListSpan>Login</MenuListSpan></Link></HeaderMainList>
                    <HeaderMainList>
                      <Link to="/cart">
                        <MenuListSpan>Cart
                          <span className="cart-num">0</span>
                        </MenuListSpan>
                      </Link>
                    </HeaderMainList>
                  </HeaderMain>
              </HeaderInner>
            </HeaderBase>
          </Pc>
          <Mobile>
            <MobileBase>
              <Hamburger />
            </MobileBase>
          </Mobile>
        </>
      )
    } else {
      return (
        <HeaderBase  isActive = {scroll <= 80}>
          <HeaderInner>
              <HeaderMain>
                <HeaderMainList><Link to="/"><MenuListSpan>Main</MenuListSpan></Link></HeaderMainList>
                <HeaderMainList><Link to="/product"><MenuListSpan>Products</MenuListSpan></Link></HeaderMainList>
                <HeaderMainList><Link to="/perfumeinfo"><MenuListSpan>Flavours</MenuListSpan></Link></HeaderMainList>
              </HeaderMain>
              <AnotherHeaderLogo>
                <Link to="/"><AnotherHeaderLogoImg src={logo}  alt="로고" /></Link>
              </AnotherHeaderLogo>
              <HeaderMain>
                <HeaderMainList><Link to="/mypage"><MenuListSpan>My Page</MenuListSpan></Link></HeaderMainList>
                <HeaderMainList><MenuListSpan className="logout" onClick={logout} >Logout</MenuListSpan></HeaderMainList>
                <HeaderMainList>
                  <Link to="/cart">
                    <MenuListSpan>Cart
                      <span className="cart-num">{countCartItem}</span>
                    </MenuListSpan>
                  </Link>
                </HeaderMainList>
              </HeaderMain>
          </HeaderInner>
        </HeaderBase>
      )
    }
  }
}

const HeaderBase = styled.header`
font-family: 'AppleSDGothicNeo';
position: fixed;
top: 0;
width: 100%;
height: 50px;
z-index: 9;
background-color: #f6f5f080;
display: ${(props) => props.isHome ? 'none' : 'show'};
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
&.logout {
  cursor: pointer;
  &:hover {
    color: black;
  }
}

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

const MobileBase = styled.header`
background-color: transparent;
width: 390px;
`