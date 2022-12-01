import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/로고.png'


export default function HomeVideo() {
  return (
    <VideoBase>
      <VideoWrap>
        <video src= 'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/homevideo.mp4' autoPlay playsInline loop muted style={{zIndex : '-999'}}/>
      </VideoWrap>
      <Link to="/about">
        <AboutContent>
          <AboutLogo>
            <img src={logo} alt="로고" /> 
          </AboutLogo>
          <AboutDes>
            ABOUT THE THEINE
          </AboutDes>
        </AboutContent>
      </Link>
    </VideoBase>
  )
}


const VideoBase = styled.section`
width: 100%;
height: 400px;
overflow: hidden;
position: relative;
`


const VideoWrap = styled.div`
font-family: 'Gortesque';
position: absolute;

`

const AboutContent = styled.div`
position: absolute;
width: 100%;
height: 100%;
margin: 0 auto;
border: 1px solid #aaa;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const AboutLogo = styled.div`

`

const AboutDes = styled.div`
letter-spacing: 5px;
margin-top: 15px;
color: #fff;
`
