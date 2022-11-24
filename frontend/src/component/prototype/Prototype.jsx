import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { getProduct } from '../../redux/actions/product_actions'
import { allProducts } from '../../redux/actions/product_actions'

import Loading from '../Loading'
import Skincare from './Skincare'
import Body from './Body'
import Hair from './Hair'
import Perfume from './Perfume'


export default function Prototype() {
  const dispatch = useDispatch()

  const [ loading, setLoading ] = useState(null)
  const [productsInfos, setProductsInfos] = useState([])
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(8)
  const [pageSize, setPageSize] = useState(0)

  const [allProduct, setAllproduct] = useState(true)
  const [skincare, setSkincare] = useState(false)
  const [body, setBody] = useState(false)
  const [hair, setHair] = useState(false)
  const [perfume, setPerfume] = useState(false)

  useEffect(() => {
    let body = {
      page: page,
      size: size
    }
    setLoading(true)
    dispatch(getProduct())
    dispatch(allProducts(body))
    .then((res) => {
      body.loadMore ? setProductsInfos(prev => [...prev, ...res.payload.data]) : setProductsInfos(res.payload.data)
      setLoading(false)
      setPageSize(res.payload.data.length)
    })
  },[])

  useEffect(() => {
    window.addEventListener('scroll', getMoreProducts)
    return() => {
      window.removeEventListener('scroll', getMoreProducts)
    }
  },[page,size,pageSize])


  const getMoreProducts = () => {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight  - 10) {
      if(pageSize >= size) {
        let currentPage = page + size
        let body = {
          page: currentPage,
          size: size,
          loadMore: true
        }
        dispatch(allProducts(body))
        .then((res) => {
          body.loadMore ? setProductsInfos(prev => [...prev, ...res.payload.data]) : setProductsInfos(res.payload.data)
        })
        setPage(currentPage)
      }
    }
  }

  const showAllProducts = 
  <ProductMenu>
    {
      productsInfos.map(productsInfo => (
        <Link to={"/product/" + productsInfo.idProducts}  key={productsInfo.idProducts}>
          <ProductList>
            <img src={productsInfo.ProductsImg} alt="제품사진" />
            <ProductExp>
              <div className='exptitle'>{productsInfo.ProductsName}</div>
              <div className='expetc'>
                <span>{productsInfo.ProductsSize1} / </span>
                <span> {productsInfo.ProductsPrice1}</span>
              </div>
            </ProductExp>
          </ProductList>
        </Link>
      ))
    }
  </ProductMenu>

  const showAll = () => {
    setAllproduct(true)
    setSkincare(false)
    setBody(false)
    setHair(false)
    setPerfume(false)
  }

  const goToSkincare = () => {
    setAllproduct(false)
    setSkincare(true)
    setBody(false)
    setHair(false)
    setPerfume(false)
  }

  const goToBody = () => {
    setAllproduct(false)
    setSkincare(false)
    setBody(true)
    setHair(false)
    setPerfume(false)
  }
  
  const goToHair = () => {
    setAllproduct(false)
    setSkincare(false)
    setBody(false)
    setHair(true)
    setPerfume(false)
  }

  const goToPerfume = () => {
    setAllproduct(false)
    setSkincare(false)
    setBody(false)
    setHair(false)
    setPerfume(true)
  }

  return (
    <ProductBase>
      {loading && <Loading /> }
      <ProductInner>
        <ProductTitle>
          <Title onClick={()=>{showAll()}}><span>전체보기</span></Title>
          <Title onClick={()=>{goToSkincare()}}><span>스킨케어</span></Title>
          <Title onClick={()=>{goToBody()}}><span>바디&핸드</span></Title>
          <Title onClick={()=>{goToHair()}}><span>헤어</span></Title>
          <Title onClick={()=>{goToPerfume()}}><span>향수</span></Title>
        </ProductTitle>
        <ProductContent>
          {allProduct && showAllProducts}
          {skincare && <Skincare />}
          {body && <Body />}
          {hair && <Hair />}
          {perfume && <Perfume />}
        </ProductContent>
      </ProductInner>
    </ProductBase>
  )
}

const ProductBase = styled.section`
background-color: #e1d8d1;
margin-top: 50px;
border-top: 1px solid black;
`

const ProductInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
font-family: 'Nanum Barun Gothic', sans-serif;
`


const ProductTitle = styled.div`
height: 80px;
padding-top: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
color: #1e1e1e;
`

const Title = styled.div`
flex: 1;
text-align: center;
cursor: pointer;
`
const ProductContent = styled.div`
margin-top: 20px;
`

const ProductMenu = styled.ul`
margin-top: 25px;
display: flex;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
`

const ProductList = styled.li`
width: 250px;
height: 380px;
padding-bottom: 25px;
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