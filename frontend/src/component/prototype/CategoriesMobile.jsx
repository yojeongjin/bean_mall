import React , { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import axios from 'axios'

export default function CategoriesMobile() {
  const location = useLocation()
  const [ datas, setDatas ] = useState([])
  const [ filteredDatas, setFilteredDatas ] = useState([])
  const [ filterName, setFilterName ] = useState('')
  const [ filters, setFilters ] = useState([])
  const [ isFilter, setIsFilter ] = useState(false)
  const [ selected, setSelected ] = useState('')

  const getCategories = (category) => {
    axios.get('https://www.theine.shop/api/category',{params: {
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
      setSelected('Skincare')
      return getCategories('스킨케어')
    } else if (location.pathname === '/body&hand') {
      setSelected('Body & Hand')
      return getCategories('바디&핸드')
    } else if (location.pathname === '/hair') {
      setSelected('Hair')
      return getCategories('헤어')
    } else if (location.pathname === '/perfume') {
      setSelected('Perfume')
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
    setFilterName(filter)

    const filteringArr = datas.filter((data) =>{
      return data.ProductsCategory === filter
    })

    setFilteredDatas(filteringArr)
    setIsFilter(true)
  },[datas, filteredDatas, isFilter])

  const filtersDetail = 
  filters.map((filter, idx) => (
    <CategoryBtn key={idx} name={filter} onClick={clickHandler} isUnderline={filter === filterName}>
      {filter}
    </CategoryBtn>
  ))

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
    <CategoriesBase>
      <Inner>

        <MobileVersionTitle 
        onChange={(e)=>{selectHandler(e)}}
        value={selected}
        >
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
padding-top: 50px;
`
const Inner = styled.div`
width: 390px;
margin: 0 auto;
position: relative;
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

const ProductCategory = styled.div`
position: fixed;
top: 200px;
left: 10px;
width: 100px;
flex-direction: column;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
color: #555;
`

const CategoryBtn = styled.button`
flex: 1;
text-decoration: ${(props) => props.isUnderline ? "underline" : "none"};
padding: 7px 0;

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