import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import mainbg from '../../assets/ibgimg900.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { getCart, verifiedAuth } from '../../redux/actions/cart_actions'

export default function Main() {
  const token = useSelector((state) => state.auth.token)
  const idUser = useSelector((state) => state.cart.idUser)

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
              <MainBtn>전체 상품보기
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
`

const MainInner = styled.div`
width: 1100px;
height: 800px;
margin: 0 auto;
position: relative;
`

const MainContent = styled.div`
height: 100%;
`

const MainWrap = styled.div`
position: absolute;
position: sticky;
top: 210px;
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
}
`

const MainBtn = styled.button`
border: 1px solid #c8c8c8;
font-size: 14px;
color: #c8c8c8;
margin-top: 35px;
padding: 10px 13px 15px;
&:hover {
  background-color: #6b645bc2;
  border: 1px solid #6b645bc2;
}
> span {
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  color: #c8c8c8;
  margin-left: 20px;
}
`

