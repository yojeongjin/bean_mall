import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/aboutlogogo.webp'


export default function HomeVideo() {
  return (
    <VideoBase>
      <VideoWrap>
        <video src= 'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/homevideo.mp4' autoPlay playsInline loop muted style={{zIndex : '-999'}}/>
      </VideoWrap>
      <Link to="/about">
        <AboutContent>
          <AboutLogo>
            <LogoRotate></LogoRotate>
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
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

>img {
  padding-top: 7px;
}
`

const LogoRotate = styled.div`
position: absolute;
border: 1px solid #fff;
width: 100px;
height: 100px;
border-radius: 100%;
&:hover {
  border: 1px dashed #fff;
  animation: rotate_image 5s linear infinite;
  transform-origin: 50% 50%;
  
  @keyframes rotate_image{
    100% {
        transform: rotate(360deg);
      }
}
`

const AboutDes = styled.div`
letter-spacing: 5px;
margin-top: 15px;
color: #fff;
`
