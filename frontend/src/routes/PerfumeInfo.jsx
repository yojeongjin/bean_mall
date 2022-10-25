import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function PerfumeInfo() {
  const [ infos, setInfo ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/perfume')
    .then((res) => {
      setInfo(res.data.data)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const renderInfo = infos.map((info, idx) => (
      <PerfumeNotice key={idx} isOdd = {idx % 2 === 1} >
        <PerfumeImg isOdd = {idx % 2 === 1}>
          <img src={info.PerfumeImg} alt="향수 이미지"/>
        </PerfumeImg>
        <PerfumeExp isOdd = {idx % 2 === 1}>
          <ExpTitle isOdd = {idx % 2 === 1}>
            <h1>{info.PerfumeName}</h1>
            <ExpDirectR isOdd = {idx % 2 === 1}> → </ExpDirectR>
            <ExpDirectL isOdd = {idx % 2 === 1}> ← </ExpDirectL>
          </ExpTitle>
          <p>
            {info.PerfumeDesc}
          </p>
          <h4 isOdd = {idx % 2 === 1}> Top notes <br></br>
            <span>{info.PerfumeTop}</span>
          </h4>
          <h4> Middle notes <br></br>
            <span>{info.PerfumeMid}</span>
          </h4>
          <h4> Base notes <br></br>
            <span>{info.PerfumeBase}</span>
          </h4>
        </PerfumeExp>
    </PerfumeNotice>
  ))

  return (
    <PerfumeInfoBase>
      <PerfumeTitle></PerfumeTitle>
      <PerfumeInner>
        {renderInfo}
      </PerfumeInner>
    </PerfumeInfoBase>
  )
}


const PerfumeInfoBase = styled.div `
background-color: #ddd6d0;
// height: 100vh;
// font-family: 'Noto Sans KR';
`

const PerfumeTitle = styled.div`
width: 100%;
height: 200px;
`

const PerfumeInner = styled.div `
width: 1100px;
height: 100%;
margin: 0 auto;
position: relative;
`

const PerfumeNotice = styled.div`
font-family: 'Noto Sans KR';
margin-top: 80px;
height: 450px;
display: flex;
flex-direction: ${(props) => props.isOdd ? 'row-reverse' : 'row'}; 
`

const PerfumeImg = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
margin-right: ${(props) => props.isOdd ? '-50px' : 0}; 
> img {
  width: 80%;
  height: 100%;
}
`

const PerfumeExp = styled.div`
flex: 1;
margin-left: ${(props) => props.isOdd ? '50px' : 0};

> p {
  display: block;
  margin-top: 25px;
  padding: 30px 0;
  border-bottom: 2px solid black;
}
>h4 {
  display: block;
  margin-top: 12px;
  border-bottom: 1px solid #9f9f9f;
  > span {
    display: block;
    padding: 10px 0 5px 0;
    color: #616161;
  }
}
`

const ExpTitle = styled.div`
  margin-top: 15px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.isOdd ? 'row-reverse' : 'row'}; 

  > h1 {
    display: block;
  }
  > span {
    display: block;
  }
`

const ExpDirectR = styled.div`
display: ${(props) => props.isOdd ? 'none' : 'block'};
`

const ExpDirectL = styled.div`
display: ${(props) => props.isOdd ? 'block' : 'none'};
`