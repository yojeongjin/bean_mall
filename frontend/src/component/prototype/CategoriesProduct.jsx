import React , { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import axios from 'axios'

export default function CategoriesProduct() {
  const location = useLocation()
  const [ datas, setDatas ] = useState([])
  const [ filteredDatas, setFilteredDatas ] = useState([])
  const [ filters, setFilters ] = useState([])
  const [ isFilter, setIsFilter ] = useState(false)

  const getCategories = (category) => {
    axios.get('http://52.78.53.87:5000/api/category',{params: {
      ProductsFilters: category
    }})
    .then((res) => {
      let AllData = res.data.data
      setDatas(AllData)
      let filterArr = AllData.map((AllData) => {return AllData.ProductsCategory})
      let filters = filterArr.filter((el, idx) => {
        return filterArr.indexOf(el) === idx
      })
      setFilters(filters)
      setIsFilter(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if (location.pathname === '/skincare') {
      return getCategories('스킨케어')
    } else if (location.pathname === '/body&hand') {
      return getCategories('바디&핸드')
    } else if (location.pathname === '/hair') {
      return getCategories('헤어')
    } else if (location.pathname === '/perfume') {
      return getCategories('향수')
    }
  },[location.pathname])

  const categoriesProducts = 
  <ProductMenu>
    {
      datas.map((data) => (
        <Link to={"/product/" + data.idProducts} key={data.idProducts}>
          <ProductList>
            <img src={data.ProductsImg} alt="제품사진" />
            <ProductExp>
              {
                data.active === 'null' ?
                <div className='exptitle'>{data.ProductsName}</div>
                :
                <div style={{display:"flex", alignItems:"center"}}>
                  <div className='exptitle'>{data.ProductsName}</div>
                  <SoldOut>{data.active}</SoldOut>
                </div>
              }
              <div className='expetc'>
                <span>{data.ProductsSize1} / </span>
                <span> {data.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
              </div>
            </ProductExp>
          </ProductList>
        </Link>
      ))
    }
  </ProductMenu>
   
   const filteredProducts = 
   <ProductMenu>
   {
     filteredDatas.map((filteredData) => (
       <Link to={"/product/" + filteredData.idProducts} key={filteredData.idProducts}>
         <ProductList>
           <img src={filteredData.ProductsImg} alt="제품사진" />
           <ProductExp>
             {
               filteredData.active === 'null' ?
               <div className='exptitle'>{filteredData.ProductsName}</div>
               :
               <div style={{display:"flex", alignItems:"center"}}>
                 <div className='exptitle'>{filteredData.ProductsName}</div>
                 <SoldOut>{filteredData.active}</SoldOut>
               </div>
             }
             <div className='expetc'>
               <span>{filteredData.ProductsSize1} / </span>
               <span> {filteredData.ProductsPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
             </div>
           </ProductExp>
         </ProductList>
       </Link>
     ))
   }
 </ProductMenu>

    const clickHandler = useCallback((e) => {
    const filter = e.target.name
    const filteringArr = datas.filter((data) =>{
      return data.ProductsCategory === filter
    })

    setFilteredDatas(filteringArr)
    setIsFilter(true)
  },[datas, filteredDatas, isFilter])

  console.log(datas)

  const filtersDetail = 
  filters.map((filter, idx) => (
    <CategoryBtn key={idx} name={filter} onClick={clickHandler}>
      {filter}
    </CategoryBtn>
  ))

  return (
    <CategoriesBase>
      <Inner>
        <ProductTitle>
          <Title>
            <Link to="/product">
              All Products
            </Link>
          </Title>
          <Title>
            <Link to="/skincare">
              Skincare
            </Link>
          </Title>
          <Title>
            <Link to="/body&hand">
              Body & Hand
            </Link>
          </Title>
          <Title>
            <Link to="/hair">
              Hair
            </Link>
          </Title>
          <Title>
            <Link to="/perfume">
              Perfume
            </Link>
          </Title>
        </ProductTitle>
        
        <ProductCategory>
          {filtersDetail}
        </ProductCategory>
      
        {
          isFilter !== true &&
          <ProductContent>
            {categoriesProducts}
          </ProductContent>
        }

        {
          isFilter &&
          <ProductContent>
            {filteredProducts}
          </ProductContent>
        }

      </Inner>
    </CategoriesBase>
  )
}

const CategoriesBase = styled.div`
font-family: 'AppleSDGothicNeo';
margin-top: 50px;
`
const Inner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
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
const ProductCategory = styled.div`
width: 60%;
height: 50px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
color: #555;
`

const CategoryBtn = styled.button`
flex: 1;
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