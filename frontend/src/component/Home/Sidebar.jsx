import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../../redux/actions/auth_actions'
import { persistor } from '../../redux/create'
import { Mobile, Pc } from '../../hooks/MediaQuery'

export default function Sidebar(props) {
  const { setOpenSide } = props

  const outside = useRef()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const countCartItem = useSelector((state)=> state.cart.cart)

  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  })

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

  const handleOutside = (e) => {
    if(!outside.current.contains(e.target)) {
      closeSide()
    }
  }

  const closeSide = () => {
    setOpenSide(false)
  }

  if (token === null) {
    return (
      <>
        <Pc>
          <SidebarBase ref={outside}>
            <SidebarList>
              <SidebarItem><Link to="/product">Products</Link></SidebarItem>
              <SidebarItem><Link to="/perfumeinfo">Flavours</Link></SidebarItem>
              <SidebarItem><Link to="/about">About</Link></SidebarItem>
              <SidebarItem><Link to="/mypage">My Page</Link></SidebarItem>
              <SidebarItem>
                <Link to="/cart">Cart
                  <CartNum className="cart-num">0</CartNum>
                </Link>
              </SidebarItem>
              <SidebarItem><Link to="/signin">Login</Link></SidebarItem>
            </SidebarList>
          </SidebarBase>  
        </Pc>
        <Mobile>
          <SidebarBase ref={outside}>
            <MobileList>
              <SidebarItem><Link to="/product">Products</Link></SidebarItem>
              <SidebarItem><Link to="/perfumeinfo">Flavours</Link></SidebarItem>
              <SidebarItem><Link to="/about">About</Link></SidebarItem>
              <SidebarItem><Link to="/mypage">My Page</Link></SidebarItem>
              <SidebarItem>
                <Link to="/cart">Cart
                  <CartNum className="cart-num">0</CartNum>
                </Link>
              </SidebarItem>
              <SidebarItem><Link to="/signin">Login</Link></SidebarItem>
            </MobileList>
          </SidebarBase>
        </Mobile>
      </>

    )
  } else  {
    return (
      <>
        <Pc>
          <SidebarBase ref={outside}>
            <SidebarList>
              <SidebarItem><Link to="/product">Products</Link></SidebarItem>
              <SidebarItem><Link to="/perfumeinfo">Flavours</Link></SidebarItem>
              <SidebarItem><Link to="/about">About</Link></SidebarItem>
              <SidebarItem><Link to="/mypage">My Page</Link></SidebarItem>
              <SidebarItem>
                <Link to="/cart">Cart
                  <CartNum className="cart-num">{countCartItem}</CartNum>
                </Link>
              </SidebarItem>
              <SidebarItem onClick={logout} style={{cursor: 'pointer'}}>Logout</SidebarItem>
            </SidebarList>
          </SidebarBase>
        </Pc>
        <Mobile>
          <SidebarBase ref={outside}>
            <MobileList>
              <SidebarItem><Link to="/product">Products</Link></SidebarItem>
              <SidebarItem><Link to="/perfumeinfo">Flavours</Link></SidebarItem>
              <SidebarItem><Link to="/about">About</Link></SidebarItem>
              <SidebarItem><Link to="/mypage">My Page</Link></SidebarItem>
              <SidebarItem>
                <Link to="/cart">Cart
                  <CartNum className="cart-num">{countCartItem}</CartNum>
                </Link>
              </SidebarItem>
              <SidebarItem onClick={logout} style={{cursor: 'pointer'}}>Logout</SidebarItem>
            </MobileList>
          </SidebarBase>
        </Mobile>
      </>
    )
  }
}


const SidebarBase = styled.div`
position: fixed;
top: 0;
right: 20px;
width: 125px;
height: 30%;
margin-top: 90px;
font-family: 'AppleSDGothicNeo';
z-index: 5;
`

const SidebarList = styled.ul`
text-align: center;
font-size: 14px;
color: #aaa;
`

const MobileList = styled.ul`
text-align: center;
font-size: 14px;
color: black;
`


const SidebarItem = styled.li`
padding: 10px 0;
position: relative;
`

const CartNum = styled.span`
position: absolute;
top: 5px;
display: inline-block;
width: 16px;
height: 16px;
line-height: 16px;
margin-left: 2px;
padding-right: 1px;
font-size: 11px;
text-align: center;
background: #fff;
color: #000;
border-radius: 50%;
`