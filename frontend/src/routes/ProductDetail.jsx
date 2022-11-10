import styled from 'styled-components'
import React, { useState,useEffect, useMemo } from 'react'
import axios from 'axios'


export default function ProductDetail(props) {
  const idx = Number(props.match.params.idx)
  const [ detailDatas, setDetailDatas ] = useState([])
  const [ value, setValue ] = useState('')
  const [ sizeOne, setSizeOne ] = useState('')
  const [ sizeTwo, setSizeTwo ] = useState('')
  const [ quantity, setQuantity ] = useState('1')
  const [ priceOne, setPriceOne ] = useState('')
  const [ priceTwo, setPriceTwo ] = useState('')
  const quantitys = [1,2,3,4,5,6,7,8,9,10]


  useEffect(() => {
    axios.get('http://localhost:5000/api/products/'+idx, {params: {
      idx: idx
    }})
    .then((res) => {
      setDetailDatas(res.data.data)
      setSizeOne(res.data.data[0].ProductsSize1)
      setSizeTwo(res.data.data[0].ProductsSize2)
      setValue(res.data.data[0].ProductsSize1)
      setPriceOne(res.data.data[0].ProductsPrice1)
      setPriceTwo(res.data.data[0].ProductsPrice2)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  
  const valueLists = [sizeOne, sizeTwo]

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const Radio = valueLists.map((valueList,idx) => (
    <DetailRadio key={idx}>
      <input id={valueList}
      value={valueList}
      name="platform"
      type="radio"
      checked={value === valueList}
      onChange={handleChange} />
      <span>{valueList}</span>
    </DetailRadio>
  ))

  const getPrice = useMemo(() => {
    const one = Number(priceOne * quantity)
    const two = Number(priceTwo * quantity)

    const onePrice = one.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const twoPrice = two.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    if (value === sizeOne) {
      return onePrice
 
    } else {
      return twoPrice
    }
  },[value, quantity, sizeOne, priceOne, priceTwo])

  const detailProduct = 
  <DetailContent>
    {
      detailDatas.map((detailData,idx) => (
        <>
          <DetailImg key={idx}>
            <img src={detailData.ProductsImg} alt="제품사진" />
          </DetailImg>
          <Detail key={idx}>
            <DetailTitle> {detailData.ProductsName} </DetailTitle>
            <DetailExp>
              {detailData.ProductsDes}
            </DetailExp>
            <DetailInfo>
              <Title>사용감</Title>
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

            <DetailPrice>
              <Title>가격</Title>
              <Price>{getPrice}</Price>
            </DetailPrice>

            <AddCartBtn type="button" onClick={()=>{console.log(getPrice)}}>카트에 추가하기</AddCartBtn>
          </Detail>
        </>
      ))
    }
</DetailContent>

  return (
    <DetailBase>
      <DetailInner>
        {detailProduct}
      </DetailInner>
    </DetailBase>
  )
}



const DetailBase = styled.section`
background-color: #e1d8d1;
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
`

const DetailContent = styled.div`
width: 80%;
height: 550px;
margin-top: 70px;
display: flex;
`
const DetailImg = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
> img {
  width: 60%;
  height: 100%;
}
`

const Detail = styled.div`
flex: 1;
margin-top: 20px;
`

const DetailTitle = styled.div`
font-weight: 500;
font-size: 35px;
margin-bottom: 10px;
`

const DetailExp = styled.div`
border-bottom: 1px solid black;
margin: 20px auto;
padding-bottom: 25px;
font-size: 15px;
color: #252525;
`

const DetailInfo = styled.div`
margin-bottom: 10px;
> span {
  font-size: 13px;
  color: #333;
  display: block;
  padding-bottom: 5px;
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
font-size: 15px;
`
const AddCartBtn = styled.button`
border: 1px solid #333;
padding: 13px 160px;
margin-top: 30px;
&:hover {
  background-color: #c5bbb3;
  border: 1px solid #c5bbb3;
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
font-weight: 500;
font-size: 15px;
padding-bottom: 2px;
`