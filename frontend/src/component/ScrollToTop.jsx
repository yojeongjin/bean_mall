import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import arrowicon from '../assets/up-arrow.png'


export default function ScrollToTop() {

  const [ showBtn, setShowBtn ] = useState(false)

  const scroll = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
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
    if(window.scrollY > 100) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const throttleScroll = throttle(handleScroll,300)

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll)
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    }
  },[])

  return (
    showBtn && 
    <ScrollContainer>
      <ToTopBtn id="top" type="button" onClick={scroll}>
        <img src={arrowicon} alt="위로" />
      </ToTopBtn>
    </ScrollContainer>
  )
}

const ScrollContainer = styled.div`
position: fixed;
right: 5%;
bottom: 5%;
z-index: 10;
`

const ToTopBtn = styled.button`
padding: 10px 12px 5px 12px;
color:#fff;
border: 1px solid #fff;
border-radius: 50%;
outline: none;
cursor: pointer;
`