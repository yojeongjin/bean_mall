import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAuth } from '../../redux/actions/auth_actions'
import { persistor } from '../../redux/create'

export default function Sidebar(props) {

  const { setOpenSide } = props

  const outside = useRef()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

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
      <SidebarBase ref={outside}>
        <SidebarList>
          <SidebarItem><Link to="/product">Products</Link></SidebarItem>
          <SidebarItem><Link to="/perfumeinfo">Flavours</Link></SidebarItem>
          <SidebarItem><Link to="/mypage">My Page</Link></SidebarItem>
          <SidebarItem><Link to="/cart">Cart</Link></SidebarItem>
          <SidebarItem><Link to="/signin">Login</Link></SidebarItem>
        </SidebarList>
      </SidebarBase>
    )
  } else  {
    return (
      <SidebarBase ref={outside}>
        <SidebarList>
          <SidebarItem><Link to="/product">Products</Link></SidebarItem>
          <SidebarItem><Link to="/perfumeinfo">Flavours</Link></SidebarItem>
          <SidebarItem><Link to="/mypage">My Page</Link></SidebarItem>
          <SidebarItem><Link to="/cart">Cart</Link></SidebarItem>
          <SidebarItem onClick={logout} style={{cursor: 'pointer'}}>Logout</SidebarItem>
        </SidebarList>
      </SidebarBase>
    )
  }
}


const SidebarBase = styled.div`
position: fixed;
top: 0;
right: 20px;
width: 125px;
height: 100%;
margin-top: 90px;
font-family: 'AppleSDGothicNeo';
transition: 0.5s ease;
z-index: 5;
`

const SidebarList = styled.ul`
text-align: center;
font-size: 14px;
color: #aaa;
`

const SidebarItem = styled.li`
padding: 10px 0;
`