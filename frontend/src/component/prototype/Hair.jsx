import React from 'react'
import styled from 'styled-components'


export default function Hair() {
  return (
    <HairBase>
      <Inner>
        <ProductCategory>
          <button>샴푸</button>
          <button>트리트먼트</button>
          <button>오일</button>
        </ProductCategory>
      </Inner>
    </HairBase>
  )
}

const HairBase = styled.section`
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