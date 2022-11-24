import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Skincare() {
  const [ skincareProducts, setSkincareProducts] = useState([])
  const products = useSelector((state) => state.product.Products)
  const skincares = products.filter(product => product.ProductsFilters === '스킨케어')
  const toner = skincares.filter(skincare => skincare.ProductsCategory === '토너')
  const serum = skincares.filter(skincare => skincare.ProductsCategory === '세럼')
  const essence = skincares.filter(skincare => skincare.ProductsCategory === '에센스')
  const lotion = skincares.filter(skincare => skincare.ProductsCategory === '로션')

  useEffect(() => {
    setSkincareProducts(skincares)
  },[])

  const allSkincare =
  <ProductMenu>
    {
      skincareProducts.map(skincareProduct => (
        <Link to={"/product/" + skincareProduct.idProducts}  key={skincareProduct.idProducts}>
        <ProductList>
          <img src={skincareProduct.ProductsImg} alt="제품사진" />
          <ProductExp>
            <div className='exptitle'>{skincareProduct.ProductsName}</div>
            <div className='expetc'>
              <span>{skincareProduct.ProductsSize1} / </span>
              <span> {skincareProduct.ProductsPrice1}</span>
            </div>
          </ProductExp>
        </ProductList>
      </Link>
      ))
    }
  </ProductMenu>

  return (
    <SkincareBase>
      <Inner>
        <ProductCategory>
          <button type='button' onClick={()=>{setSkincareProducts(toner)}}>토너</button>
          <button type='button' onClick={()=>{setSkincareProducts(serum)}}>세럼</button>
          <button type='button' onClick={()=>{setSkincareProducts(essence)}}>에센스</button>
          <button type='button' onClick={()=>{setSkincareProducts(lotion)}}>로션</button>
        </ProductCategory>
        <ProductContent>
          {allSkincare}
        </ProductContent>
      </Inner>
    </SkincareBase>
  )
}

const SkincareBase = styled.section`
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
height: 360px;
padding-bottom: 15px;
cursor: pointer;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
> img {
  width: 40%;
  height: 90%;
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