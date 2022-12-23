import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import mainbg from '../../assets/ibgimg900.webp'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getCart, verifiedAuth } from '../../redux/actions/cart_actions'
import useToken from '../../hooks/useToken'
import useIduser from '../../hooks/useIduser'

export default function Main() {
  const token = useToken()
  const idUser = useIduser()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifiedAuth({
      headers: { 'm-access-token': token }
    }))
    dispatch(getCart(idUser))
  })

  return (
    <MainSection>
      <MainInner>
        <MainContent>
          <MainWrap>
            <MainTitle>
              <h1>In Two Minds</h1>
              <h3>Combination Skin Care</h3>
              <p>Introducing a new range to restore equillibrium and nourish the surface,<br></br>
              designed specifically for combination skin.
              </p>
            </MainTitle>
            <Link to="/product">
              <MainBtn>Discover the range
              <span> → </span>
              </MainBtn>
            </Link>
          </MainWrap>
        </MainContent>
      </MainInner>
    </MainSection>
  )
}

const MainSection = styled.section`
background-image: url(${mainbg});
height: 800px;
font-family: 'AppleSDGothicNeo';
background-attachment: fixed;

@media ${props => props.theme.mobile} {
  background: url(${mainbg}) no-repeat center;
  background-size: cover;
}
`


const MainInner = styled.div`
width: 1100px;
height: 800px;
margin: 0 auto;
position: relative;
@media ${props => props.theme.mobile} {
  width: 385px;
}
`

const MainContent = styled.div`
height: 100%;
margin-left: 45px;
`


const MainWrap = styled.div`
position: absolute;
position: sticky;
top: 190px;
`


const MainTitle = styled.div`
color: #c8c8c8;
> h1 {
  font-size: 32px;
}
>h3 {
  font-size: 20px;
}
> p {
  font-size: 13px;
  margin-top: 30px;
  @media ${props => props.theme.mobile} {
    font-size: 12px;
  }
}
`




const MainBtn = styled.button`
border: 1px solid #c8c8c8;
font-size: 14px;
color: #c8c8c8;
margin-top: 35px;
padding: 10px 13px 15px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  background-color: #6b645bc2;
  border: 1px solid #6b645bc2;
}
> span {
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  color: #c8c8c8;
  margin-left: 20px;
}
`