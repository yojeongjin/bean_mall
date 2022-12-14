import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Mobile, Pc } from '../hooks/MediaQuery'

export default function PerfumeInfo() {
  const [ infos, setInfo ] = useState([])
  const [ start, setStart ] = useState(0)
  const [ limit, setLimit ] = useState(3) //eslint-disable-line no-unused-vars
  const [ pageSize, setPageSize ] = useState(0)


  useEffect(() => {
    let body = {
      start: start,
      limit: limit
    }
    getInfo(body)
  },[])

  const getInfo = (body) => {
    axios.post('https://www.theine.shop/api/perfume', body)
    .then((res) => {
      console.log(res)
      if(body.loadMore) {
        setInfo([...infos, ...res.data.data])
      } else {
        setInfo(res.data.data)
      }
      setPageSize(res.data.data.length)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const moreInfo = () => {
    let currentStart = start + limit
    let body = {
      start: currentStart,
      limit: limit,
      loadMore: true
    }
    getInfo(body)
    setStart(start)
  }


  const renderInfo = infos.map((info, idx) => (
      <PerfumeNotice key={info.idPerfume} isOdd = {idx % 2 === 1} >
        <PerfumeImg isOdd = {idx % 2 === 1}>
          <img src={info.PerfumeImg} alt="향수 이미지"/>
        </PerfumeImg>
        <PerfumeExp isOdd = {idx % 2 === 1}>
          <Link to={"/product/" + info.idProducts}>
            <ExpTitle isOdd = {idx % 2 === 1}>
              <h1>{info.PerfumeName}</h1>
              <ExpDirectR isOdd = {idx % 2 === 1}> → </ExpDirectR>
              <ExpDirectL isOdd = {idx % 2 === 1}> ← </ExpDirectL>
            </ExpTitle>
          </Link>
          <p>
            {info.PerfumeDesc}
          </p>
          <H4andSpan isOdd = {idx % 2 === 1}>
            <h4> Top notes <br></br>
              <span>{info.PerfumeTop}</span>
            </h4>
            <h4> Middle notes <br></br>
              <span>{info.PerfumeMid}</span>
            </h4>
            <h4> Base notes <br></br>
              <span>{info.PerfumeBase}</span>
            </h4>
          </H4andSpan>
        </PerfumeExp>
    </PerfumeNotice>
  ))

  const mobileRenderInfo = infos.map((info, idx) => (
    <MobileNotice key={info.idPerfume} isOdd = {idx % 2 === 1}>
      <MobileImg isOdd = {idx % 2 === 1}>
        <img src={info.PerfumeImg} alt="향수 이미지" />
      </MobileImg>
      <MobileExp isOdd = {idx % 2 === 1}>
        <Link to={"/product/" + info.idProducts}>
          <ExpTitle isOdd = {idx % 2 === 1}>
            <h1>{info.PerfumeName}</h1>
            <ExpDirectR isOdd = {idx % 2 === 1}> → </ExpDirectR>
            <ExpDirectL isOdd = {idx % 2 === 1}> ← </ExpDirectL>
          </ExpTitle>
        </Link>
        <p>
          {info.PerfumeDesc}
        </p>
        <H4andSpan isOdd = {idx % 2 === 1}>
          <h4> Top notes <br></br>
            <span>{info.PerfumeTop}</span>
          </h4>
          <h4> Middle notes <br></br>
            <span>{info.PerfumeMid}</span>
          </h4>
          <h4> Base notes <br></br>
            <span>{info.PerfumeBase}</span>
          </h4>
        </H4andSpan>
      </MobileExp>
  </MobileNotice>
))

  return (
    <>
      <Pc>
        <PerfumeInfoBase>
          <PerfumeTitle></PerfumeTitle>
          <PerfumeInner>
            {renderInfo}
            {pageSize >= limit && 
              <LoadMore onClick={moreInfo}>더 보기</LoadMore>
            } 
          </PerfumeInner>
        </PerfumeInfoBase>
      </Pc>
      <Mobile>
        <PerfumeInfoBase style={{margin:"0", border:"none"}}>
          <PerfumeTitle></PerfumeTitle>
          <PerfumeInner style={{width: "370px"}}>
            {mobileRenderInfo}
            {pageSize >= limit && 
              <LoadMore onClick={moreInfo}>더 보기</LoadMore>
            } 
          </PerfumeInner>
        </PerfumeInfoBase>
      </Mobile>
    </>
  )
}


const PerfumeInfoBase = styled.section`
font-family: 'AppleSDGothicNeo';
margin-top: 50px;
`

const PerfumeTitle = styled.div`
width: 100%;
height: 80px;
`

const PerfumeInner = styled.div`
width: 1100px;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const PerfumeNotice = styled.div`
margin: 30px 0 50px 0;
height: 450px;
display: flex;
flex-direction: ${(props) => props.isOdd ? 'row-reverse' : 'row'}; 
`

const MobileImg = styled.div`
width: 370px;
height: 450px;
display: flex;
justify-content: center;
align-items: center;
position: absolute; 
transform: rotateY(0deg);
backface-visibility: hidden;
transition: 1s;
> img {
  width: 100%;
  height: 100%;
}
`

const MobileExp = styled.div`
width: 370px;
height: 450px;
position: absolute;
transform: rotateY(-180deg);
backface-visibility: hidden;
transition: 1s;
> p {
  display: block;
  font-size: 15px;
  line-height: 20px;
  margin-top: 10px;
  padding: 30px 0;
  border-bottom: 2px solid black;
}
`


const MobileNotice = styled.div`
width: 370px;
height: 450px;
perspective: 600px;
margin: 10px 0;

&:hover {
  ${MobileImg} {
    transform: rotateY(180deg);
  }
  ${MobileExp} {
    transform: rotateY(0deg);
  }
}
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
  font-size: 15px;
  line-height: 20px;
  margin-top: 10px;
  padding: 30px 0;
  border-bottom: 2px solid black;
}
`

const H4andSpan = styled.div`
text-align: ${(props) => props.isOdd ? 'right' : 'left'}; 
  > h4 {
  display: block;
  margin-top: 12px;
  font-size: 15px;
  border-bottom: 1px solid #9f9f9f;
  > span {
    font-size: 13px;
    display: block;
    padding: 10px 0 5px 0;
    color: #616161;
  }
`

const ExpTitle = styled.div`
  margin-top: 15px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.isOdd ? 'row-reverse' : 'row'}; 
  cursor: pointer;
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

const LoadMore = styled.button `
border: 1px solid black;
font-size: 15px;
color: black;
margin: 50px 0 50px 0;
padding: 13px 70px;
&:hover {
  background-color: #6b645bc2;
  border: 1px solid #ddd6d0;
}
`