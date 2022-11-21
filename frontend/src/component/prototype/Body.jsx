import React from 'react'
import styled from 'styled-components'


export default function Body() {
  return (
    <BodyBase>
      <Inner>
        <ProductCategory>
          <button>핸드</button>
          <button>바디로션</button>
          <button>바디클렌저</button>
        </ProductCategory>
      </Inner>
    </BodyBase>
  )
}

const BodyBase = styled.section`
background-color: #e1d8d1;
`
const Inner = styled.div`
margin: 0 auto;
height: 100vh;
`

const ProductCategory = styled.div`
width: 60%;
height: 50px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
color: #555;
> button {
  flex: 1;
}
`