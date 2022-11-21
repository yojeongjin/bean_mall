import React from 'react'
import styled from 'styled-components'


export default function Perfume() {
  return (
    <PerfumeBase>
      <Inner>
        <ProductCategory></ProductCategory>
      </Inner>
    </PerfumeBase>
  )
}

const PerfumeBase = styled.section`
background-color: #e1d8d1;
`
const Inner = styled.div`
margin: 0 auto;
height: 100vh;
`

const ProductCategory = styled.div`
height: 50px;
`