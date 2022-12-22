import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/actions/product_actions'
import { allProducts } from '../../redux/actions/product_actions'
import axios from 'axios'
import { Mobile, Pc } from '../../hooks/MediaQuery'

import Loading from '../Loading'

export default function Prototype() {
  const dispatch = useDispatch()
  const idUser = useSelector((state) => state.cart.idUser)
  const [ loading, setLoading ] = useState(null)
  const [productsInfos, setProductsInfos] = useState([])
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(8)
  const [pageSize, setPageSize] = useState(0)
  const [ categories, setCategories ] = useState([])
  const [ categoryData, setCategoryData ] = useState([])

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
      setCategories(['전체보기', '스킨케어', '바디&핸드', '헤어', '향수'])
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

  const chageOption = (e) => {
    console.log(e.target.value)
    // if(e.target.value === '전체보기') {
    //   showAll()
    // } else if (e.target.value === '스킨케어') {
    //   goToSkincare()
    // } else if (e.target.value === '바디&핸드') {
    //   goToBody()
    // } else if (e.target.value === '헤어') {
    //   goToHair()
    // } else if (e.target.value === '향수') {
    //   goToPerfume()
    // }
  }



  const getCategoryHandler = (e) => {
    let category = e.target.name
    axios.get('http://52.78.53.87:5000/api/category',{params: {
      ProductsFilters: category
    }})
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const categoriesDetail = 
  categories.map((category,idx) => (
    <Title key={idx} name={category} onClick={getCategoryHandler}>
      {category}
    </Title>
  ))

  const productDetail = 
    <ProductMenu>
      {
        categoryData.map((data) => (
          <ProductList key={data.idProducts}>
            <img src={data.ProductsImg} alt="제품사진" />
            <ProductExp>
              <div className='exptitle'>{data.ProductsName}</div>
              <div className='expetc'>
                <span>{data.ProductsSize1} / </span>
                <span> {data.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
              </div>
            </ProductExp>
          </ProductList>
        ))
      }
    </ProductMenu>


  return (
    <>
      <Pc>
        <ProductBase>
          {loading && <Loading /> }
          <ProductInner>
            { idUser === 50 && upload }
            <ProductTitle>
              {categoriesDetail}
            </ProductTitle>
            <ProductContent>

            </ProductContent>
          </ProductInner>
        </ProductBase>
      </Pc>
      <Mobile>
        <ProductBase style={{marginTop: "0px", paddingTop: "50px", border:"none"}}>
          {loading && <Loading /> }
          <ProductInner style={{width: "390px", margin: "0 auto"}}>
            <MobileVersionTitle onChange={(e)=>{chageOption(e)}}>
              <MobileOption>전체보기</MobileOption>
              <MobileOption>스킨케어</MobileOption>
              <MobileOption>바디&핸드</MobileOption>
              <MobileOption>헤어</MobileOption>
              <MobileOption>향수</MobileOption>
            </MobileVersionTitle>
            { idUser === 50 && upload }
            <ProductContent>
              {/* {allProduct && showAllProducts}
              {skincare && <Skincare />}
              {body && <Body />}
              {hair && <Hair />}
              {perfume && <Perfume />} */}
            </ProductContent>
          </ProductInner>
        </ProductBase>
      </Mobile>
    </>
  )
}

const ProductBase = styled.section`
margin-top: 50px;
border-top: 1px solid black;
`

const ProductInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
font-family: 'Nanum Barun Gothic', sans-serif;
`

const ProductUpload = styled.div`
position: absolute;
top: 100px;
left: -50px;
border-bottom: 1px solid black;
font-size: 14px;
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

const Title = styled.button`
flex: 1;
text-align: center;
cursor: pointer;
`

const MobileVersionTitle = styled.select`
position:fixed;
top: 125px;
left: 30px;
width: 75px;
height: 25px;
font-size: 12px;
outline: none;
background-color: transparent;
border: none;
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
  font-weight: 500;
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