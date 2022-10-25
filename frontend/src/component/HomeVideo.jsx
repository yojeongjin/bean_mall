import styled from 'styled-components'



export default function BodyReport() {
  return (
    <VideoBase>
      <video src= 'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/homevideo.mp4' autoPlay playsInline loop muted />
    </VideoBase>
  )
}


const VideoBase = styled.div`
width: 70%;
width: 100%;
height: 400px;
overflow: hidden;

`