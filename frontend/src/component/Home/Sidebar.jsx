import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {

  const { setOpenSide } = props

  const outside = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  })

  const handleOutside = (e) => {
    if(!outside.current.contains(e.target)) {
      closeSide()
    }
  }

  const closeSide = () => {
    setOpenSide(false)
  }

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