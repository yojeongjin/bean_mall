import React, { useState } from 'react'
import styled from 'styled-components'
import hamburger from '../../assets/hamburger.png'
import Sidebar from './Sidebar'
import { Mobile, Pc } from '../../hooks/MediaQuery'

export default function Hamburger() {
  const [ openSide, setOpenSide ] = useState(false)
  
  const toggleSide = () => {
    setOpenSide(!openSide)
  }

  return (
    <>
      <Pc>
        <HeaderBase>
          <HeaderBtn type="button" onClick={() => {toggleSide()}}>
            <img src={hamburger} alt="아이콘" />
          </HeaderBtn>
          { openSide && <Sidebar setOpenSide={setOpenSide} />}
        </HeaderBase>
      </Pc>
      <Mobile>
        <HeaderBase>
          <HeaderBtn type="button" onClick={() => {toggleSide()}}>
            <img src={hamburger} alt="아이콘" />
          </HeaderBtn>
          { openSide && <Sidebar setOpenSide={setOpenSide} />}
        </HeaderBase>
      </Mobile>
    </>
  )
}


const HeaderBase = styled.header`
position: fixed;
top: 30px;
right: 60px;
z-index: 10;
`
const HeaderBtn = styled.button`

`