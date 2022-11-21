import React from 'react'
import styled from 'styled-components'
import spinner from '../assets/spinner.gif'


export default function Loading() {
  return (
    <LoadingBase>
      <img src={spinner} alt="로딩중" />
    </LoadingBase>
  )
}


const LoadingBase = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background: #ffffffb7;
z-index: 999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`