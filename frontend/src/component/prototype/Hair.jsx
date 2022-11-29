import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Hair() {
  const [ hairProducts, setHairProducts ] = useState([])
  const products = useSelector((state) => state.product.Products)
  const hairs = products.filter(product => product.ProductsFilters === '헤어')
  const shampoo = hairs.filter(hair => hair.ProductsCategory === '샴푸')
  const treatment = hairs.filter(hair => hair.ProductsCategory === '트리트먼트')
  const oil = hairs.filter(hair => hair.ProductsCategory === '오일')

  useEffect(() => {
    setHairProducts(hairs)
  },[])

  const allHair =
  <ProductMenu>
    {
      hairProducts.map(hairProduct => (
        <Link to={"/product/" + hairProduct.idProducts}  key={hairProduct.idProducts}>
        <ProductList>
          <img src={hairProduct.ProductsImg} alt="제품사진" />
          <ProductExp>
            <div className='exptitle'>{hairProduct.ProductsName}</div>
            <div className='expetc'>
              <span>{hairProduct.ProductsSize1} / </span>
              <span> {hairProduct.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
            </div>
          </ProductExp>
        </ProductList>
      </Link>
      ))
    }
  </ProductMenu>

  return (
    <HairBase>
      <Inner>
        <ProductCategory>
          <button type='button' onClick={()=>{setHairProducts(shampoo)}}>샴푸</button>
          <button type='button' onClick={()=>{setHairProducts(treatment)}}>트리트먼트</button>
          <button type='button' onClick={()=>{setHairProducts(oil)}}>오일</button>
        </ProductCategory>
        <ProductContent>
          {allHair}
        </ProductContent>
      </Inner>
    </HairBase>
  )
}

const HairBase = styled.section`
background-color: #e1d8d1;
`
const Inner = styled.div`
margin: 0 auto;
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
const ProductContent = styled.div`
margin-top: 20px;
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