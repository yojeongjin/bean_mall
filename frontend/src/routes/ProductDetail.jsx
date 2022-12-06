import styled from 'styled-components'
import React, { useState,useEffect, useMemo } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cart_actions'
import { Mobile, Pc } from '../hooks/MediaQuery'

export default function ProductDetail(props) {
  const idx = Number(props.match.params.idx)
  const idUser = useSelector((state) => state.cart.idUser)
    const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  const [ data, setData ] = useState([])
  const [ detailDatas, setDetailDatas ] = useState([])
  const [ value, setValue ] = useState('')
  const [ quantity, setQuantity ] = useState('1')
  const [ price, setPrice ]  = useState(0)

  const quantitys = [1,2,3,4,5,6,7,8,9,10]

  const { idProducts, ProductsFilters, ProductsImg, ProductsName, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2 } = data

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/'+idx, {params: {
      idx: idx
    }})
    .then((res) => {
      setDetailDatas(res.data.data)
      setData(res.data.data[0])
      setValue(res.data.data[0].ProductsSize1)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  
  const valueLists = [ProductsSize1, ProductsSize2]

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const Radio = valueLists.map((valueList,idx) => (
    <DetailRadio key={idx}>
      <input id={valueList}
      value={valueList}
      name="size"
      type="radio"
      checked={value === valueList}
      onChange={handleChange} />
      <span>{valueList}</span>
    </DetailRadio>
  ))

  const getPrice = useMemo(() => {
    const numquan = Number(quantity)
    const one = ProductsPrice1 * numquan
    const two = ProductsPrice2 * numquan

    if (value === ProductsSize1) {
      setPrice(ProductsPrice1)
      return one.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
      setPrice(ProductsPrice2)
      return two.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }
  },[value, quantity,ProductsPrice1,ProductsPrice2,ProductsSize1])

  const clickCart = () => {
    if (token !==  null) {
      let body = {
        CartName: ProductsName,
        CartImg: ProductsImg,
        CartFilters: ProductsFilters,
        CartSize: value,
        CartPrice: price,
        CartQuantity: quantity,
        CartProductsId: idProducts,
        idUser: idUser
      }
      dispatch(addToCart(body))
      .then((res) => {
        alert(res.payload.msg)
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      window.location.href = '/signin'
    }
  }


  const detailProduct = 
  detailDatas.map(detailData => (
    <>
      <DetailImg key={detailData.idProducts}>
        <img src={detailData.ProductsImg} alt="제품사진" />
      </DetailImg>
      <Detail>
        <DetailTitle> {detailData.ProductsName} </DetailTitle>

        <DetailPrice>
          {/* <Title>가격</Title> */}
          <Price>{getPrice} 원</Price>
        </DetailPrice>

        <DetailExp>
          {detailData.ProductsDes}
        </DetailExp>
        <DetailInfo>
          <Title>특징</Title>
          <span>{detailData.ProductsUsing}</span>
        </DetailInfo>

        <DetailInfo>
          <Title>주요성분</Title>
          <span>{detailData.ProductsMain}</span>
        </DetailInfo>
    
        <DetailRadioGroup>
          <Title>사이즈</Title>
          <DetailRadio>
            {Radio}
          </DetailRadio>
        </DetailRadioGroup>

        <Quantity>
          <Title>수량</Title>
          <QuantitySelect onChange={(e)=>{setQuantity(e.target.value)}}>                
            {
              quantitys.map((quantity,idx) => (
                <QuantityOption key={idx}>{quantity}</QuantityOption>
              ))
            }
          </QuantitySelect>
        </Quantity>
                        
        <BtnWrap>
          <AddCartBtn type="button" onClick={clickCart}>
            카트에 추가하기
          </AddCartBtn>
        </BtnWrap>
      </Detail>
    </>
  ))


    


  
  return (
    <>
      <Pc>
        <DetailBase>
          <DetailInner>
            <DetailContent>
              {detailProduct}
            </DetailContent>
          </DetailInner>
        </DetailBase>
      </Pc>
      <Mobile>
        <DetailBase style={{marginTop:"0", border: "none", height: "auto"}}>
          <DetailInner style={{width: "370px"}}>
            <DetailContent style={{width: "100%", flexDirection: "column",  height: "auto"}}>
              {detailProduct}
            </DetailContent>
          </DetailInner>
        </DetailBase>
      </Mobile>
    </>
  )
}



const DetailBase = styled.section`
margin-top: 50px;
height: 100vh;
border-top: 1px solid black;
font-family: 'AppleSDGothicNeo';
`

const DetailInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
`

const DetailContent = styled.div`
width: 90%;
height: 550px;
margin-top: 70px;
display: flex;
`

const DetailImg = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
margin-right: 50px;
> img {
  width: 35%;
  height: 95%;
}
`


const Detail = styled.div`
flex: 1;
`

const DetailTitle = styled.div`

font-size: 35px;
margin: 20px 0 10px 0;
`

const DetailExp = styled.div`
border-top: 2px solid black;
margin: 20px auto;
padding: 25px 0;
font-size: 13px;
color: #252525;
line-height: 20px;
`

const DetailInfo = styled.div`
margin-bottom: 10px;
border-bottom: 1px solid #aaa;
> span {
  font-size: 13px;
  color: #666;
  display: block;
  padding-bottom: 14px;
}
`

const DetailRadioGroup = styled.div`

`
const DetailRadio = styled.div`
display: flex;
margin-bottom: 10px;
> input[type=radio] {
  accent-color: #333;
  margin-right: 10px;
  vertical-align: bottom;
}

> span {
  display: inline-block;
  font-size: 14px;
  padding-top: 2px;
  margin-right: 8px;
}
`

const DetailPrice = styled.div`
`
const Price = styled.span`
padding: 0 5px;
font-size: 14px;
`
const AddCartBtn = styled.button`
width: 100%;
background-color: #333;
border: 1px solid #333;
color: #fff;
padding: 13px 160px;
font-size: 13px;
&:hover {
  color: #fff;
}
`

const Quantity = styled.div`
margin-bottom: 10px;
`
const QuantitySelect = styled.select`
  width: 70px;
  height: 28px;
  font-size: 12px;
  margin-right: 7px;
  border: 1px solid #aaa;
  outline: none;
`
const QuantityOption = styled.option`
  text-align: center;
`

const Title = styled.h3`
font-size: 14px;
padding-bottom: 10px;
`

const BtnWrap = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
`