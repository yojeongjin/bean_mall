import React from 'react'
import styled from 'styled-components'


export default function HomeVideo() {
  return (
    <VideoBase>
      <video src= 'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/homevideo.mp4' autoPlay playsInline loop muted />
    </VideoBase>
  )
}


const VideoBase = styled.section`
width: 70%;
width: 100%;
height: 400px;
overflow: hidden;
`