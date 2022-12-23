import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { getProduct } from '../../redux/actions/product_actions'
import { allProducts } from '../../redux/actions/product_actions'

import Loading from '../Loading'
import useIduser from '../../hooks/useIduser'

export default function PrototypeMobile() {
  const dispatch = useDispatch()
  const idUser = useIduser()
  const [ loading, setLoading ] = useState(null)
  const [productsInfos, setProductsInfos] = useState([])
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(8)
  const [pageSize, setPageSize] = useState(0)

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
              {
                productsInfo.active === 'null' ?
                <div className='exptitle'>{productsInfo.ProductsName}</div>
                :
                <div style={{display:"flex", alignItems:"center"}}>
                  <div className='exptitle'>{productsInfo.ProductsName}</div>
                  <SoldOut>{productsInfo.active}</SoldOut>
                </div>
              }
              <div className='expetc'>
                <span>{productsInfo.ProductsSize1} / </span>
                <span> {productsInfo.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
              </div>
            </ProductExp>
          </ProductList>
        </Link>
      ))
    }
  </ProductMenu>

  const upload =
    <ProductUpload>
      <Link to="/upload">상품 업로드하기</Link>
    </ProductUpload>

  const selectHandler = (e) => {
    if(e.target.value === 'All Products') {
      window.location.href = '/product'
    } else if (e.target.value === 'Skincare') {
      window.location.href = '/skincare'
    } else if (e.target.value === 'Body & Hand') {
      window.location.href = '/body&hand'
    } else if (e.target.value === 'hair') {
      window.location.href = '/hair'
    } else if (e.target.value === 'Perfume') {
      window.location.href = '/perfume'
    }
  }
  return (
      <ProductBase>
        {loading && <Loading /> }
        <ProductInner>
          { idUser === 50 && upload }
          
          <MobileVersionTitle onChange={(e)=>{selectHandler(e)}}>
            <MobileOption>
              All Products
            </MobileOption>
            <MobileOption>
              Skincare
            </MobileOption>
            <MobileOption>
              Body & Hand
            </MobileOption>
            <MobileOption>
              Hair
            </MobileOption>
            <MobileOption>
              Perfume
            </MobileOption>
          </MobileVersionTitle>

          <ProductContent>
            {showAllProducts}
          </ProductContent>
        </ProductInner>
      </ProductBase>
  )
}

const ProductBase = styled.div`
font-family: 'AppleSDGothicNeo';
padding-top: 50px;
`

const ProductInner = styled.div`
width: 390px;
margin: 0 auto;
position: relative;
`

const ProductUpload = styled.div`
position: absolute;
top: 100px;
left: -50px;
border-bottom: 1px solid black;
font-size: 14px;
`



const MobileVersionTitle = styled.select`
position:fixed;
top: 125px;
left: 30px;
width: 90px;
height: 25px;
font-size: 12px;
outline: none;
border: none;
background-color: transparent;
`

const MobileOption = styled.option`

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
  text-align: center;
}
> .expetc {
  text-align: center;
  font-size:12px;
  color:#7c7c7c;
}
`

const SoldOut = styled.div`
margin: 0 0 3px 5px;
background-color: #911e1e;
padding: 3px 5px;
color: #fff;
font-size: 13px;
`