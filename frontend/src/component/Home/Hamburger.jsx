import React, { useState } from 'react'
import styled from 'styled-components'
import hamburger from '../../assets/hamburger.png'
import Sidebar from './Sidebar'

export default function Hamburger() {
  const [ openSide, setOpenSide ] = useState(false)
  
  const toggleSide = () => {
    setOpenSide(!openSide)
  }

  return (
    <HeaderBase>
      <HeaderBtn type="button" onClick={() => {toggleSide()}}>
        <img src={hamburger} alt="아이콘" />
      </HeaderBtn>
      { openSide && <Sidebar setOpenSide={setOpenSide} />}
    </HeaderBase>
  )
}


const HeaderBase = styled.header`
position: fixed;
top: 30px;
right: 60px;
border: 1px solid #fff;
`
const HeaderBtn = styled.button`

`