import {  RiArrowDropRightLine } from 'react-icons/ri'
import { useState } from 'react'
import styled from 'styled-components'

import essence from '../assets/theine/essence.png'
import body from '../assets/theine/body.png'
import shampoo from '../assets/theine/shampoo.png'
import handcream from '../assets/theine/handcream.png'
import bodycleanser from '../assets/theine/bodycleanser.png'

export default function Report() {
  const carouselImgs = [ essence, body, handcream, shampoo, bodycleanser ]
  const [activeIdx, setActiveIdx] = useState(0)

  function setNext() {
    setActiveIdx(activeIdx => (activeIdx + 1) % carouselImgs.length)
    console.log(activeIdx)
  }
  // function setPrev() {
  //   setActiveIdx(activeIdx => (activeIdx -1 + carouselImgs.length))
  //   console.log(activeIdx)
  // }

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
              <span> → </span>
            </ReportSelect>
          </ReportInfo>
          {/* <CarouselBtn onClick={setPrev}>
            <RiArrowDropLeftLine />
          </CarouselBtn> */}
          <CarouselList>
            {
              carouselImgs.map((carouselImg, idx) => (
                <CarouselItems key={idx} activeIdx={activeIdx}>
                  <img src={carouselImg} alt="제품 사진" />
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
background-color: #fdfdf3;`


const Inner = styled.div`
width: 1300px;
height: 746px;
margin: 0 auto;
position: relative;`

const ReportIntro = styled.div`
padding-top: 100px;
display: flex;
`

const ReportInfo = styled.div`
position: relative;
width: 25%;
flex-direction: column;
display: flex;
margin: 0 50px 0 30px;
`
const ReportH1 = styled.h1`
position: absolute;
top: 80px;
display: block;
font-family: 'Com4';
color: #252525;
font-size: 32px;
`

const ReportSpan = styled.span`
position: absolute;
top: 150px;
display: block;
color: #252525;
font-size: 15px;
font-family: 'Nanum Barun Gothic', sans-serif;
`

const ReportSelect = styled.span`
margin-left: 20px;
position: absolute;
bottom: -50px;
font-family: 'Nanum Barun Gothic', sans-serif;
color: #252525;
display: block;
> span {
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
}
`

const CarouselBtn = styled.button`
border: none;
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
`

const CarouselList = styled.ul`
width: 70%;
height: 100%;
display: flex;
overflow: hidden;`

const CarouselItems = styled.li`
margin-right: 150px;
transform: translateX(-${(props) => props.activeIdx}00%);
transition :200ms ease;
&:first-child {
  margin-left: 60px;
}
> img {
  width: 200px;
  height: 450px;
}
`

const Nav = styled.ul`
display: flex;
justify-content: center;
margin-top: 90px;
`

const NavItem = styled.li`
display: inline-block;
`

const NavBtn = styled.button`
width: 250px;
background-color: #000;
opacity: ${(props) => props.isActive ? 0.8 : 0.3};
border: none;`