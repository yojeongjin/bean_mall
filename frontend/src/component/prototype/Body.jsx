import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Mobile, Pc } from '../../hooks/MediaQuery'

export default function Body() {
  const [ bodyProducts, setBodyProducts ] = useState([])
  const products = useSelector((state) => state.product.Products)
  const bodys = products.filter(product => product.ProductsFilters === '바디&핸드')
  const body = bodys.filter(body => body.ProductsCategory === '바디')
  const hand = bodys.filter(body => body.ProductsCategory === '핸드')

  useEffect(() => {
    setBodyProducts(bodys)
  },[])

  const allBodyHand =
  <ProductMenu>
    {
      bodyProducts.map(bodyProduct => (
        <Link to={"/product/" + bodyProduct.idProducts}  key={bodyProduct.idProducts}>
        <ProductList>
          <img src={bodyProduct.ProductsImg} alt="제품사진" />
          <ProductExp>
            <div className='exptitle'>{bodyProduct.ProductsName}</div>
            <div className='expetc'>
              <span>{bodyProduct.ProductsSize1} / </span>
              <span> {bodyProduct.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
            </div>
          </ProductExp>
        </ProductList>
      </Link>
      ))
    }
  </ProductMenu>

  return (
    <>
      <Pc>
        <BodyBase>
          <Inner>
            <ProductCategory>
              <button type='button' onClick={()=>{setBodyProducts(hand)}}>핸드</button>
              <button type='button' onClick={()=>{setBodyProducts(body)}}>바디</button>
            </ProductCategory>
            <ProductContent>
              {allBodyHand}
            </ProductContent>
          </Inner>
        </BodyBase>
      </Pc>
      <Mobile>
        <BodyBase>
          <Inner>
            <ProductCategory style={{position:"fixed", top: "180px", left: "10px", width: "100px", flexDirection: "column"}}>
              <button style={{padding: "7px 0"}}  type='button' onClick={()=>{setBodyProducts(hand)}}>핸드</button>
              <button style={{padding: "7px 0"}}  type='button' onClick={()=>{setBodyProducts(body)}}>바디</button>
            </ProductCategory>
            <ProductContent>
              {allBodyHand}
            </ProductContent>
          </Inner>
        </BodyBase>
      </Mobile>
    </>
  )
}

const BodyBase = styled.section`
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
  width: 40%;
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