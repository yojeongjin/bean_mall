import { useEffect,useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Product() {
  const titles = ['전체보기', '스킨케어', '바디&핸드', '헤어', '향수']
  const skincares = ['전체보기', '토너', '세럼', '에센스', '로션']
  const bodys = ['전체보기', '바디', '핸드']
  const hairs = ['전체보기', '샴푸', '트리트먼트', '오일']
  const [productsInfos, setProductsInfos] = useState([])
  const [categoryTypes, setcategoryTypes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
    .then((res) => {
      setProductsInfos(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const allProducts = 
  <ProductMenu>
    {
      productsInfos.map((productsInfo,idx) => (
        <Link to="/productdetail">
          <ProductList key={idx}>
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

  const getFilter = (title) => {
    let body = {
      filter: title
    }
    axios.post('http://localhost:5000/api/products', body)
    .then((res) => {
      setProductsInfos(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
    if (title === '스킨케어') {
      setcategoryTypes(skincares)
    } else if (title === '바디&핸드') {
      setcategoryTypes(bodys)
    } else if (title === '헤어') {
      setcategoryTypes(hairs)
    }
  } 

  const getCategory = (categoryType) => {
    let body = {
      category: categoryType
    }
    axios.post('http://localhost:5000/api/products', body)
    .then((res) => {
      setProductsInfos(res.data.data)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <ProductBase>
      <ProductInner>
        <ProductBanner>
        </ProductBanner>
        <ProductTitle>
          {
            titles.map((title,idx) => (
              <button key={idx} onClick={()=>{getFilter(title)}}><span>{title}</span></button>
            ))
          }
        </ProductTitle>
        <ProductCategory isActive>
          {
            categoryTypes.map((categoryType,idx) => (
              <button key={idx} onClick={() => {getCategory(categoryType)}}>
                <span>{categoryType}</span>
              </button>
            ))
          }
        </ProductCategory>
        <ProductContent>
          {allProducts}
        </ProductContent>
      </ProductInner>
    </ProductBase>
  )
}

const ProductBase = styled.section`
background-color: #e1d8d1;
margin-top: 50px;
`

const ProductInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
font-family: 'Nanum Barun Gothic', sans-serif;
`

const ProductBanner = styled.div`

`

const ProductTitle = styled.div`
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
color: #1e1e1e;
> button {
  flex: 1;
  > span {
    &:hover {
      border-bottom: 1px solid black;
    }
  }
}
`
const ProductContent = styled.div`
margin-top: 20px;
`

const ProductMenu = styled.ul`
margin-top: 5px;
display: flex;
flex-wrap: wrap;
`

const ProductList = styled.li`
width: 250px;
height: 360px;
margin: 0px auto;
padding-bottom: 15px;
cursor: pointer;
> img {
  margin-left: 50px;
  width: 60%;
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

const ProductCategory = styled.div`
width: 70%;
height: 50px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
color: #555;
> button {
  flex: 1;
  > span {
    display: block;
    &:hover {
      color: black;
      scale: 1.1;
    }
  }
}

`