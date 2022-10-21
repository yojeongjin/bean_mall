import styled from 'styled-components'
import mainbg from '../assets/mainbg.png'

export default function Main() {
  return (
    <MainSection>
      <MainInner>
        <MainContent>
          <MainTitle>
            <h1>In Two Minds</h1>
            <h3>Combination Skin Care</h3>
            <p>Introducing a new range to restore equillibrium and nourish the surface,<br></br>
            designed specifically for combination skin.
            </p>
          </MainTitle>
          <MainBtn>Discover the range
          <span> → </span>
          </MainBtn>
        </MainContent>
      </MainInner>
    </MainSection>
  )
}

const MainSection = styled.section`
background-image: url(${mainbg});
margin-top: 100px;
height: 600px;
`

const MainInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
`

const MainContent = styled.div`
position: absolute;
top: 130px;
left: 50px;
width: 500px;
height: 300px;
`

const MainTitle = styled.div`
font-family: 'Nanum Barun Gothic', sans-serif;
color: #c8c8c8;
> h1 {
  font-size: 25px;
}
>h3 {
  font-size: 14px;
}
> p {
  font-size: 13px;
  margin-top: 30px;
}
`

const MainBtn = styled.button`
border: 1px solid #c8c8c8;
font-size: 14px;
color: #c8c8c8;
margin-top: 30px;
padding: 15px 15px;
&:hover {
  background-color: #6b645bc2;
  border: none;
}
> span {
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  color: #c8c8c8;
  margin-left: 20px;
}
`