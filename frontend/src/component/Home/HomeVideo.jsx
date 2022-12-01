import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/로고.png'


export default function HomeVideo() {
  return (
    <VideoBase>
      <VideoWrap>
        <video src= 'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/homevideo.mp4' autoPlay playsInline loop muted />
      </VideoWrap>
    </VideoBase>
  )
}


const VideoBase = styled.section`
width: 100%;
height: 400px;
overflow: hidden;
`


const VideoWrap = styled.div`

`
