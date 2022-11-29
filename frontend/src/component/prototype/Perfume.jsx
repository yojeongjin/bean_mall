import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Perfume() {

  const products = useSelector((state) => state.product.Products)
  const perfumes = products.filter(product => product.ProductsFilters === '향수')

  const allPerfume =
  <ProductMenu>
    {
      perfumes.map(perfume => (
        <Link to={"/product/" + perfume.idProducts}  key={perfume.idProducts}>
        <ProductList>
          <img src={perfume.ProductsImg} alt="제품사진" />
          <ProductExp>
            <div className='exptitle'>{perfume.ProductsName}</div>
            <div className='expetc'>
              <span>{perfume.ProductsSize1} / </span>
              <span> {perfume.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
            </div>
          </ProductExp>
        </ProductList>
      </Link>
      ))
    }
  </ProductMenu>

  return (
    <PerfumeBase>
      <Inner>
        <ProductContent>
          {allPerfume}
        </ProductContent>
      </Inner>
    </PerfumeBase>
  )
}

const PerfumeBase = styled.section`
background-color: #e1d8d1;
`
const Inner = styled.div`
margin: 0 auto;
`


const ProductContent = styled.div`
margin-top: 70px;
`

const ProductMenu = styled.ul`
margin-top: 5px;
display: flex;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
`

const ProductList = styled.li`
width: 250px;
height: 380px;
padding-bottom: 15px;
cursor: pointer;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
> img {
  width: 50%;
  height: 100%;
}
&:hover {
  background-color: #c5bbb3;
}
`

const ProductExp = styled.div`
width: 250px;
height: 50px;
font-size:14px;
> .exptitle {
  font-weight: 500;
  text-align: center;
}
> .expetc {
  text-align: center;
  font-size:12px;
  color:#7c7c7c;
}
`