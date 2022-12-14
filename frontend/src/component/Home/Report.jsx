import {  RiArrowDropRightLine } from 'react-icons/ri'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Mobile, Pc } from '../../hooks/MediaQuery'


export default function Report() {
  const carouselImgs = 
  [ 
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%85%E1%85%A1%E1%84%87%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A6%E1%86%AB%E1%84%89%E1%85%B3.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8F%E1%85%A1%E1%84%86%E1%85%A9%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%90%E1%85%A9%E1%84%82%E1%85%A5.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%92%E1%85%B4%E1%86%AB%E1%84%89%E1%85%A2%E1%86%A8%E1%84%92%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7.webp',
    'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%89%E1%85%A3%E1%86%B7%E1%84%91%E1%85%AE%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A2%E1%86%A8.webp'
  ]
  const [activeIdx, setActiveIdx] = useState(0)

  function setNext() {
    setActiveIdx(activeIdx => (activeIdx + 1) % carouselImgs.length)
  }

  function goNext(idx) {
    setActiveIdx(idx)
  }

  return (
    <ReportSection>
      <Inner>
        <ReportIntro>
          <ReportInfo>
            <ReportH1>A skin of many moods</ReportH1>
            <ReportSpan>Explore an expanded selection of products<br></br>
            suited to combination skin, including<br></br>
            formulations to cleanse, treat and hydrate<br></br>
            without overburdening the skin.
            </ReportSpan>
            <ReportSelect>
              Browse selections
              <span> ??? </span>
            </ReportSelect>
          </ReportInfo>
          <CarouselList>
            {
              carouselImgs.map((carouselImg, idx) => (
                <CarouselItems key={idx} activeIdx={activeIdx}>
                  <img src={carouselImg} alt="?????? ??????" />
                </CarouselItems>
              ))
            }
          </CarouselList>
          <CarouselBtn onClick={setNext}>
            <RiArrowDropRightLine />
          </CarouselBtn>
        </ReportIntro>
        <Nav>
            {
              Array.from({length:carouselImgs.length}).map((_,idx) => (
                <NavItem key={idx} onClick={()=>{goNext(idx)}}>
                  <NavBtn isActive = {activeIdx === idx} />
                </NavItem>
              ))
            }
        </Nav>
      </Inner>
    </ReportSection>
  )
}

const ReportSection = styled.section`
background-color: #fdfdf3;
`
const Inner = styled.div`
width: 1300px;
height: 746px;
margin: 0 auto;
position: relative;
@media ${props => props.theme.mobile} {
  width: 390px;
  height: 780px;
  display: flex;
  flex-direction: column;
  margin: 0 0;
}
`

const ReportIntro = styled.div`
padding-top: 100px;
display: flex;
@media ${props => props.theme.mobile} {
  flex-direction: column;
}
`

const ReportInfo = styled.div`
font-family: 'Com4';
position: relative;
width: 50%;
display: flex;
flex-direction: column;
margin: 0 50px 0 30px;
@media ${props => props.theme.mobile} {
  width: 90%;
  height: 320px;
  margin: 0 100px;
}
`


const ReportH1 = styled.h1`
position: absolute;
top: 80px;
display: block;
color: #252525;
font-size: 32px;
`

const ReportSpan = styled.span`
font-family: 'AppleSDGothicNeo';
position: absolute;
top: 150px;
display: inline-block;
color: #252525;
font-size: 15px;
`


const ReportSelect = styled.span`
margin-left: 20px;
position: absolute;
bottom: -50px;
font-family: 'AppleSDGothicNeo';
color: #252525;
display: block;
> span {
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
}
@media ${props => props.theme.mobile} {
  display: none;
}
`

const CarouselBtn = styled.button`
background-color: transparent;
width: 5%;
color: #656565;
opacity: 0.3;
z-index: 1;
font-size: 90px;
cursor: pointer;
&:hover {
  opacity: 0.8;
}

@media ${props => props.theme.mobile} {
  display: none;
}
`

const CarouselList = styled.ul`
width: 100%;
height: 100%;
display: flex;
overflow: hidden;
@media ${props => props.theme.mobile} {
  width: 130%;
  margin-top: 40px;
  height: 80%;
}
`
const CarouselItems = styled.li`
margin-right: 180px;
transform: translateX(-${(props) => props.activeIdx}00%);
transition :200ms ease;
&:first-child {
  margin-left: 90px;
}
> img {
  width: 120px;
  height: 400px;
}

@media ${props => props.theme.mobile} {
  margin-right: 100px;
  &:first-child {
    margin-left: 20px;
  }
  > img {
    width: 90px;
    height: 310px;
  }
}
`

const Nav = styled.ul`
display: flex;
justify-content: center;
margin-top: 90px;
@media ${props => props.theme.mobile} {
  display: none;
}
`

const NavItem = styled.li`
display: inline-block;
`

const NavBtn = styled.button`
width: 315px;
background-color: #000;
opacity: ${(props) => props.isActive ? 0.8 : 0.3};
border: none;`
