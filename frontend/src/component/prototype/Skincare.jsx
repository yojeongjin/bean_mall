import React from 'react'
import styled from 'styled-components'

export default function Skincare() {


  return (
    <SkincareBase>
      <Inner>
        <ProductCategory>
          <button>토너</button>
          <button>세럼</button>
          <button>에센스</button>
          <button>로션</button>
        </ProductCategory>
      </Inner>
    </SkincareBase>
  )
}

const SkincareBase = styled.section`
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