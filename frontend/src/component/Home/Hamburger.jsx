import React, { useState } from 'react'
import styled from 'styled-components'
import hamburger from '../../assets/hamburger.png'
import close from '../../assets/closeicon.png'
import Sidebar from './Sidebar'

export default function Hamburger() {
  const [ openSide, setOpenSide ] = useState(false)
  
  const toggleOpen = () => {
    setOpenSide(true)
  }

  const toggleClose = () => {
    setOpenSide(false)
  }

  return (
    <HeaderBase>
      {
        openSide !== true &&
        <HeaderBtn type="button" onClick={toggleOpen}>
          <img src={hamburger} alt="아이콘" />
        </HeaderBtn>
      }
      {
        openSide &&
        <HeaderBtn type="button" onClick={toggleClose}>
          <img 
          style={{width:"30px", height: "30px"}}
          src={close} alt="아이콘" />
        </HeaderBtn>
      }

      { openSide && <Sidebar setOpenSide={setOpenSide} />}
    </HeaderBase>
  )
}


const HeaderBase = styled.header`
position: fixed;
top: 30px;
right: 50px;
z-index: 999;

@media ${props => props.theme.mobile} {
  right: 10px;
}
`
const HeaderBtn = styled.button`

`