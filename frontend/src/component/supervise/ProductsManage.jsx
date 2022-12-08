import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Pc,Mobile } from '../../hooks/MediaQuery'
export default function ProductsManage(props) {
  const { data } = props
  const size1= data.ProductsSize1.split('ml')[0]
  const size2= data.ProductsSize2.split('ml')[0]

  const [ sale, setSale ] = useState(true)
  const [ soldout, setSoldout ] =useState(false)

  const [ photo, setPhoto ] = useState(null)
  const [ img, setImg ] = useState('')
  const [ productsName, setProductsName ] = useState(data.ProductsName)
  const [ productsDes, setProductsDes ] = useState(data.ProductsDes)
  const [ productsUsing, setProductsUsing ] = useState(data.ProductsUsing)
  const [ productsMain, setProductsMain ] = useState(data.ProductsMain)
  const [ productsSize1, setProductsSize1 ] = useState(size1)
  const [ productsSize2, setProductsSize2 ] = useState(size2)
  const [ productsPrice1, setProductsPrice1 ] = useState(data.ProductsPrice1)
  const [ productsPrice2, setProductsPrice2 ] = useState(data.ProductsPrice2)

  const contents = 
  [productsName, productsDes, productsUsing, productsMain, productsSize1, productsSize2, productsPrice1, productsPrice2]

  useEffect(()=> {
    if(data.active === '품절') {
      setSale(false)
      setSoldout(true)
    }
  },[])

  const uploadPhoto = (e) => {
    const file = e.target.files[0]
    const boardUrl = URL.createObjectURL(file)
    setPhoto(boardUrl)
    setImg(file)
  }
  
  const uploadProduct = () => {
    if(contents.indexOf('') === -1) {
      if(photo === null) {
        let body = {
          idProducts: data.idProducts,
          ProductsName: productsName,
          ProductsDes: productsDes,
          ProductsUsing: productsUsing,
          ProductsMain: productsMain,
          ProductsImg: data.ProductsImg,
          ProductsSize1: `${productsSize1}ml`,
          ProductsSize2:`${productsSize2}ml`,
          ProductsPrice1: productsPrice1,
          ProductsPrice2: productsPrice2
        }

        axios.patch('http://localhost:5000/api/getuser', body)
        .then((res) => {
          alert(res.data.msg)
          window.location.reload()
        })
      } else {
        let form = new FormData()

        form.append('image', img)
        form.append('idProducts', data.idProducts)
        form.append('ProductsName', productsName)
        form.append('ProductsDes', productsDes)
        form.append('ProductsUsing', productsUsing)
        form.append('ProductsMain', productsMain)
        form.append('ProductsSize1', `${productsSize1}ml`)
        form.append('ProductsSize2', `${productsSize2}ml`)
        form.append('ProductsPrice1', productsPrice1)
        form.append('ProductsPrice2', productsPrice2)
    
        axios.patch('http://localhost:5000/api/upload', form, {
          header: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          alert(res.data.msg)
          window.location.reload()
        })
        .catch(err => console.log(err))
      }
    } else {
      return alert('모든 내용을 작성해주세요.')
    }
  }

  const soldoutProduct = () => {
    let body = {
      active: '품절',
      idProducts: data.idProducts
    }
    axios.patch('http://localhost:5000/api/products', body)
    .then((res) => {
      alert(res.data.msg)
      setSale(false)
      setSoldout(true)
      window.location.reload()
    })
  }

  const onGoingProduct = () => {
    let body = {
      active: 'null',
      idProducts: data.idProducts
    }
    axios.patch('http://localhost:5000/api/products', body)
    .then((res) => {
      alert(res.data.msg)
      setSale(true)
      setSoldout(false)
      window.location.reload()
    })
  }

  
  const deleteProduct = () => {
      axios.delete('http://localhost:5000/api/products', {params: {
        idProducts: data.idProducts
      }})
    .then((res) => {
      alert(res.data.msg)
      window.location.href = '/product'
    })
  }

  return (
    <>
      <Pc>
        <DetailBase>
          <DetailInner>
            {
              sale &&
            <DetailContent>
              <DetailImg style={{flex: 1}}>
                <PreviewImg src={data.ProductsImg} alt="제품사진" style={{width:"35%", height:"95%", margin: "0 auto"}}/>
                📸 사진을 업로드 해주세요.
                <FileInput type="file" accept="image/*" onChange={(e)=>{uploadPhoto(e)}} />
                { photo && <PreviewImg src={photo} alt="제품사진" />}
              </DetailImg>
              <Detail style={{flex: 1}}>
                <Title style={{padding: "0 0"}}>제품명</Title>
                <DetailTitle>
                  <ProductInput
                  id="title"
                  type="text"
                  value={productsName}
                  required
                  onChange={(e)=>{setProductsName(e.target.value)}}
                  style={{fontSize: "32px"}}
                  />
                </DetailTitle>

                <DetailExp style={{marginBottom: "20px"}}>
                  <Title>제품 설명</Title>
                  <ProductDes 
                  value = {productsDes}
                  onChange={(e)=>{setProductsDes(e.target.value)}} 
                  />
                </DetailExp>

                
                <DetailInfo>
                  <Title style={{marginRight: "10px"}}>특징</Title>
                  <ProductInput 
                    id="using"
                    type="text"
                    value={productsUsing}
                    required
                    onChange={(e)=>{setProductsUsing(e.target.value)}}
                  />
                  <Title style={{margin: "0 10px"}}>주요성분</Title>
                  <ProductInput 
                    id="main"
                    type="text"
                    value={productsMain}
                    required
                    onChange={(e)=>{setProductsMain(e.target.value)}}
                  />
                </DetailInfo>

                <DetailInfo>
                  <Title style={{marginRight: "10px"}}>카테고리</Title>
                  <Select disabled>
                    <Options>{data.ProductsFilters}</Options>
                  </Select>
                  <Title style={{marginLeft: "80px"}}>종류</Title>
                  <Select style={{marginLeft: "18px"}} disabled>
                    <Options>{data.ProductsCategory}</Options>
                  </Select>
                </DetailInfo>
            
                <DetailRadioGroup>
                  <Title>사이즈</Title>
                  <DetailRadio>
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize1}
                      required
                      onChange={(e)=>{setProductsSize1(e.target.value)}}
                    />
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize2}
                      required
                      onChange={(e)=>{setProductsSize2(e.target.value)}}
                    />
                  </DetailRadio>
                </DetailRadioGroup>

                <Title>가격</Title>
                <DetailPrice>
                  <Price>
                    <ProductInput
                    id="price"
                    type="number"
                    value={productsPrice1}
                    required
                    onChange={(e)=>{setProductsPrice1(e.target.value)}}
                    /> 원
                  </Price>
                  <Price>
                    <ProductInput 
                      id="price"
                      type="number"
                      value={productsPrice2}
                      required
                      onChange={(e)=>{setProductsPrice2(e.target.value)}}
                    /> 원
                  </Price>
                </DetailPrice>

                <BtnWrap>
                  <AddCartBtn onClick={()=>{uploadProduct()}}>
                    상품 수정하기
                  </AddCartBtn>
                </BtnWrap>
                <BtnWrap>
                  <AddCartBtn 
                  style={{flex: 1, padding: "12px 13px", marginRight: "20px", backgroundColor:"#807974", border: "none"}}
                  onClick={()=>{soldoutProduct()}}>상품 품절 처리</AddCartBtn>
                  <AddCartBtn 
                  style={{flex: 1, padding: "12px 13px", backgroundColor:"#c5bbb3", border: "none", color: "#911e1e"}}
                  onClick={()=>{deleteProduct()}}>상품 삭제</AddCartBtn>
                </BtnWrap>
              </Detail>
            </DetailContent>
          }

          {/*soldout*/}
          {
            soldout && 
            <DetailContent>
              <DetailImg style={{flex: 1}}>
                <PreviewImg 
                src={data.ProductsImg} alt="제품사진" 
                style={{width:"35%", height:"95%", margin: "0 auto", filter: "brightness(50%)"}} />
                📸 사진을 업로드 해주세요.
              </DetailImg>
              <Detail style={{flex: 1}}>
                <Title style={{padding: "0 0"}}>제품명</Title>
                <DetailTitle>
                  <ProductInput
                  id="title"
                  type="text"
                  value={productsName}
                  disabled
                  style={{fontSize: "32px"}}
                  />
                </DetailTitle>

                <DetailExp style={{marginBottom: "20px"}}>
                  <Title>제품 설명</Title>
                  <ProductDes 
                  value = {productsDes}
                  disabled
                  />
                </DetailExp>

                
                <DetailInfo>
                  <Title style={{marginRight: "10px"}}>특징</Title>
                  <ProductInput 
                    id="using"
                    type="text"
                    value={productsUsing}
                    disabled
                  />
                  <Title style={{margin: "0 10px"}}>주요성분</Title>
                  <ProductInput 
                    id="main"
                    type="text"
                    value={productsMain}
                    disabled
                  />
                </DetailInfo>

                <DetailInfo>
                  <Title style={{marginRight: "10px"}}>카테고리</Title>
                  <Select disabled>
                    <Options>{data.ProductsFilters}</Options>
                  </Select>
                  <Title style={{marginLeft: "80px"}}>종류</Title>
                  <Select style={{marginLeft: "18px"}} disabled>
                    <Options>{data.ProductsCategory}</Options>
                  </Select>
                </DetailInfo>
            
                <DetailRadioGroup>
                  <Title>사이즈</Title>
                  <DetailRadio>
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize1}
                      disabled
                    />
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize2}
                      disabled
                    />
                  </DetailRadio>
                </DetailRadioGroup>

                <Title>가격</Title>
                <DetailPrice>
                  <Price>
                    <ProductInput
                    id="price"
                    type="number"
                    value={productsPrice1}
                    disabled
                    /> 원
                  </Price>
                  <Price>
                    <ProductInput 
                      id="price"
                      type="number"
                      value={productsPrice2}
                      disabled
                    /> 원
                  </Price>
                </DetailPrice>

                <BtnWrap>
                  <AddCartBtn disabled style={{textDecoration:"line-through"}}>
                    상품 수정하기
                  </AddCartBtn>
                </BtnWrap>
                <BtnWrap>
                  <AddCartBtn 
                  style={{flex: 1, padding: "12px 13px", marginRight: "20px", backgroundColor:"#807974", border: "none"}}
                  onClick={()=>{onGoingProduct()}}>상품 판매로 전환</AddCartBtn>
                  <AddCartBtn 
                  style={{flex: 1, padding: "12px 13px", backgroundColor:"#c5bbb3", border: "none", color: "#911e1e"}}
                  onClick={()=>{deleteProduct()}}>상품 삭제</AddCartBtn>
                </BtnWrap>
              </Detail>
            </DetailContent>
          }
          </DetailInner>
        </DetailBase>
      </Pc>

      <Mobile>
        <DetailBase style={{height: "auto"}}>
          <DetailInner style={{width: "370px"}}>
          {
            sale &&
            <DetailContent style={{width: "100%", flexDirection: "column",  height: "auto"}}>
              <DetailImg style={{width: "100%", marginBottom: "30px"}}>
                <PreviewImg src={data.ProductsImg} alt="제품사진" style={{position:"relative", width:"35%", height:"95%", margin: "0 auto"}} />
                <FileInput type="file" accept="image/*" onChange={(e)=>{uploadPhoto(e)}} />
                { photo && <PreviewImg src={photo} alt="제품사진" />}
              </DetailImg>
              <Detail>
                <Title>제품명</Title>
                <DetailTitle>
                  <ProductInput
                  id="title"
                  type="text"
                  value={productsName}
                  required
                  onChange={(e)=>{setProductsName(e.target.value)}}
                  style={{fontSize: "32px", width: "100%"}}
                  />
                </DetailTitle>

                <DetailExp>
                  <Title>제품 설명</Title>
                  <ProductDes 
                  value = {productsDes}
                  onChange={(e)=>{setProductsDes(e.target.value)}} 
                  style={{width: "100%"}}
                  />
                </DetailExp>

                
                <DetailInfo style={{marginTop: "20px", width: "100%", flexDirection: "column", display: "flex", alignItems:"start"}}>
                  <Title>특징</Title>
                  <ProductInput 
                    id="using"
                    type="text"
                    value={productsUsing}
                    required
                    style={{width: "100%"}}
                    onChange={(e)=>{setProductsUsing(e.target.value)}}
                  />
                  <Title>주요성분</Title>
                  <ProductInput 
                    id="main"
                    type="text"
                    value={productsMain}
                    required
                    style={{width: "100%"}}
                    onChange={(e)=>{setProductsMain(e.target.value)}}
                  />
                </DetailInfo>

                <DetailInfo>
                  <Title>카테고리</Title>
                  <Select disabled>
                    <Options>{data.ProductsFilters}</Options>
                  </Select>
                  <Title>종류</Title>
                  <Select disabled>
                    <Options>{data.ProductsCategory}</Options>
                  </Select>
                </DetailInfo>
            
                <DetailRadioGroup>
                  <Title>사이즈</Title>
                  <DetailRadio>
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize1}
                      required
                      onChange={(e)=>{setProductsSize1(e.target.value)}}
                    />
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize2}
                      required
                      onChange={(e)=>{setProductsSize2(e.target.value)}}
                    />
                  </DetailRadio>
                </DetailRadioGroup>

                <Title>가격</Title>
                <DetailPrice>
                  <Price style={{display: "flex"}}>
                    <ProductInput
                    id="price"
                    type="number"
                    value={productsPrice1}
                    required
                    onChange={(e)=>{setProductsPrice1(e.target.value)}}
                    /> 원
                  </Price>
                  <Price>
                    <ProductInput 
                      id="price"
                      type="number"
                      value={productsPrice2}
                      required
                      onChange={(e)=>{setProductsPrice2(e.target.value)}}
                    /> 원
                  </Price>
                </DetailPrice>

                <BtnWrap>
                  <AddCartBtn style={{padding: "10px 15px"}} onClick={()=>{uploadProduct()}}>
                    상품 수정하기
                  </AddCartBtn>
                </BtnWrap>
                <BtnWrap>
                  <AddCartBtn 
                  style={{flex: 1, padding: "10px 11px", marginRight: "20px", backgroundColor:"#807974", border: "none"}}
                  onClick={()=>{soldoutProduct()}}>상품 품절 처리</AddCartBtn>
                  <AddCartBtn 
                  style={{flex: 1, padding: "10px 11px", backgroundColor:"#c5bbb3", border: "none", color: "#911e1e"}}
                  onClick={()=>{deleteProduct()}}>상품 삭제</AddCartBtn>
                </BtnWrap>
              </Detail>
            </DetailContent>
          }

          {/*soldout*/}
          {
            soldout && 
            <DetailContent style={{width: "100%", flexDirection: "column",  height: "auto"}}>
              <DetailImg style={{flex: 1}}>
                <PreviewImg 
                src={data.ProductsImg} alt="제품사진" 
                style={{position:"relative", width:"35%", height:"95%", margin: "0 auto", filter: "brightness(50%)"}} />
              </DetailImg>
              <Detail style={{flex: 1}}>
                <Title style={{padding: "0 0"}}>제품명</Title>
                <DetailTitle>
                  <ProductInput
                  id="title"
                  type="text"
                  value={productsName}
                  disabled
                  style={{fontSize: "32px", width: "100%"}}
                  />
                </DetailTitle>

                <DetailExp style={{marginBottom: "20px"}}>
                  <Title>제품 설명</Title>
                  <ProductDes 
                  value = {productsDes}
                  disabled
                  style={{width: "100%"}}
                  />
                </DetailExp>

                
                <DetailInfo style={{marginTop: "20px", width: "100%", flexDirection: "column", display: "flex", alignItems:"start"}}>
                  <Title>특징</Title>
                  <ProductInput 
                    id="using"
                    type="text"
                    value={productsUsing}
                    disabled
                    style={{width: "100%"}}
                  />
                  <Title>주요성분</Title>
                  <ProductInput 
                    id="main"
                    type="text"
                    value={productsMain}
                    disabled
                    style={{width: "100%"}}
                  />
                </DetailInfo>

                <DetailInfo>
                  <Title style={{marginRight: "10px"}}>카테고리</Title>
                  <Select disabled>
                    <Options>{data.ProductsFilters}</Options>
                  </Select>
                  <Title style={{marginLeft: "80px"}}>종류</Title>
                  <Select style={{marginLeft: "18px"}} disabled>
                    <Options>{data.ProductsCategory}</Options>
                  </Select>
                </DetailInfo>
            
                <DetailRadioGroup>
                  <Title>사이즈</Title>
                  <DetailRadio>
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize1}
                      disabled
                    />
                    <input
                    name="size"
                    type="radio" 
                    disabled />
                    <ProductInput 
                      id="product-size"
                      type="number"
                      value={productsSize2}
                      disabled
                    />
                  </DetailRadio>
                </DetailRadioGroup>

                <Title>가격</Title>
                <DetailPrice>
                  <Price style={{display: "flex"}}>
                    <ProductInput
                    id="price"
                    type="number"
                    value={productsPrice1}
                    disabled
                    /> 원
                  </Price>
                  <Price>
                    <ProductInput 
                      id="price"
                      type="number"
                      value={productsPrice2}
                      disabled
                    /> 원
                  </Price>
                </DetailPrice>

                <BtnWrap>
                  <AddCartBtn disabled style={{textDecoration:"line-through", padding: "10px 15px"}} >
                    상품 수정하기
                  </AddCartBtn>
                </BtnWrap>
                <BtnWrap>
                  <AddCartBtn 
                  style={{flex: 1, padding: "10px 11px", marginRight: "20px", backgroundColor:"#807974", border: "none"}}
                  onClick={()=>{onGoingProduct()}}>상품 판매로 전환</AddCartBtn>
                  <AddCartBtn 
                  style={{flex: 1, padding: "10px 11px", backgroundColor:"#c5bbb3", border: "none", color: "#911e1e"}}
                  onClick={()=>{deleteProduct()}}>상품 삭제</AddCartBtn>
                </BtnWrap>
              </Detail>
            </DetailContent>
          }
          </DetailInner>
        </DetailBase>
      </Mobile>
    </>
  )
}



const DetailBase = styled.section`
font-family: 'AppleSDGothicNeo';
height: 100vh;
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
margin-top: 70px;
display: flex;
`

const PreviewImg = styled.img`

`

const DetailImg = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin-right: 50px;
border: 1px dashed black;
flex: 1;

${PreviewImg} {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`

const FileInput = styled.input`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
opacity: 0;
cursor: pointer;
`

const ProductInput = styled.input`
outline: none;
font-size: 14px;
`

const ProductDes = styled.textarea`
width: 90%;
height: 100px;
outline: none;
resize: none;
border: 1px solid #bbb;
`


const Detail = styled.div`
flex: 1;
`

const DetailTitle = styled.div`

font-size: 35px;
margin-bottom: 10px;
`

const DetailExp = styled.div`
border-top: 2px solid black;
margin: 0 auto;
padding: 25px 0 0;
font-size: 13px;
color: #252525;
line-height: 20px;
`

const DetailInfo = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
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
`

const DetailPrice = styled.div`
display: flex;
`

const Price = styled.div`
margin: 0 5px;

&:first-child {
  margin-left: 28px;
}
`

const AddCartBtn = styled.button`
width: 100%;
background-color: #333;
border: 1px solid #333;
color: #fff;
padding: 13px 160px;
font-size: 13px;
`
const Title = styled.h3`
font-size: 14px;
padding-bottom: 5px;
`

const BtnWrap = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
`

const Select = styled.select`
outline: none;
font-size: 14px;
padding: 2px 5px;
margin-bottom: 3px;
text-align: center;
`

const Options = styled.option`

`