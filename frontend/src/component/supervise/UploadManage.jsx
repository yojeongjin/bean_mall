import React, { useState } from 'react'
import styled from 'styled-components'
import { Pc, Mobile } from '../../hooks/MediaQuery'

export default function UploadManage() {
  const [ photo, setPhoto ] = useState('')
  const [ productsName, setProductsName ] = useState('')
  const [ productsDes, setProductsDes ] = useState('')
  const [ productsUsing, setProductsUsing ] = useState('')
  const [ productsMain, setProductsMain ] = useState('')
  const [ productsSize1, setProductsSize1 ] = useState(0)
  const [ productsSize2, setProductsSize2 ] = useState(0)
  const [ productsPrice1, setProductsPrice1 ] = useState(0)
  const [ productsPrice2, setProductsPrice2 ] = useState(0)
  const [ productsCategory, setProductsCategory ] = useState('')
  const [ productsFilters, setProductsFilters ] = useState('')
  const [ categories, setCategories ] = useState([])

  const uploadPhoto = (e) => {
    const file = e.target.files[0]
    const boardUrl = URL.createObjectURL(file)
    setPhoto(boardUrl)
  }

  const handleSelect = (e) => {
    setProductsFilters(e.target.value)

    if (e.target.value === '스킨케어') {
      setCategories(['세럼', '토너', '에센스', '로션'])
    } else if (e.target.value === '바디&핸드') {
      setCategories(['바디', '핸드'])
    } else if (e.target.value === '헤어') {
      setCategories(['샴푸', '트리트먼트', '오일'])
    } else if (e.target.value === '향수') {
      setCategories(['향수'])
    }
  }

  return (
    <>
      <Pc>
        <DetailBase>
          <DetailInner>
            <DetailContent>
              <DetailImg style={{flex: 1}}>
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
                  />
                </DetailTitle>

                <DetailExp style={{marginBottom: "20px"}}>
                  <Title>제품 설명</Title>
                  <ProductDes onChange={(e)=>{setProductsDes(e.target.value)}} />
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
                  <Select onChange={(e)=>{handleSelect(e)}}>
                    <Options>스킨케어</Options>
                    <Options>바디&핸드</Options>
                    <Options>헤어</Options>
                    <Options>향수</Options>
                  </Select>
                  <Title style={{marginLeft: "80px"}}>종류</Title>
                  <Select style={{marginLeft: "18px"}} onChange={(e)=>{setProductsCategory(e.target.value)}}>
                    {
                      categories.map((category) => (
                        <Options>{category}</Options>
                      ))
                    }
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
                  <AddCartBtn>
                    상품 업로드하기
                  </AddCartBtn>
                </BtnWrap>
              </Detail>
            </DetailContent>
          </DetailInner>
        </DetailBase>
      </Pc>

      <Mobile>
        <DetailBase style={{border: "none", margin: "0"}}>
          <DetailInner style={{width: "370px"}}>
            <DetailContent style={{flexDirection: "column", margin: "10px"}}>
              <DetailImg style={{width: "100%", height: "300px"}}>
                📸 사진을 업로드 해주세요.
                <FileInput type="file" accept="image/*" onChange={(e)=>{uploadPhoto(e)}} />
                { photo && <PreviewImg src={photo} alt="제품사진" />}
              </DetailImg>
              <Detail>
                <Title style={{padding: "0 0"}}>제품명</Title>
                <DetailTitle style={{width: "100%"}}>
                  <ProductInput
                  id="title"
                  type="text"
                  value={productsName}
                  required
                  onChange={(e)=>{setProductsName(e.target.value)}}
                  style={{width: "100%"}}
                  />
                </DetailTitle>

                <DetailExp>
                  <Title>제품 설명</Title>
                  <ProductDes style={{width: "100%"}} onChange={(e)=>{setProductsDes(e.target.value)}} />
                </DetailExp>

                
                <DetailInfo style={{width: "100%", flexDirection: "column", display: "flex", alignItems:"start"}}>
                  <Title style={{margin: "5px 0"}}>특징</Title>
                  <ProductInput 
                    id="using"
                    type="text"
                    value={productsUsing}
                    required
                    onChange={(e)=>{setProductsUsing(e.target.value)}}
                  />
                  <Title style={{margin: "5px 0"}}>주요성분</Title>
                  <ProductInput 
                    id="main"
                    type="text"
                    value={productsMain}
                    required
                    onChange={(e)=>{setProductsMain(e.target.value)}}
                  />
                </DetailInfo>

                <DetailInfo style={{width: "100%", flexDirection: "column", display: "flex", alignItems:"start"}}>
                  <Title  style={{margin: "5px 0"}}>카테고리</Title>
                  <Select onChange={(e)=>{handleSelect(e)}}>
                    <Options>스킨케어</Options>
                    <Options>바디&핸드</Options>
                    <Options>헤어</Options>
                    <Options>향수</Options>
                  </Select>
                  <Title style={{margin: "5px 0"}}>종류</Title>
                  <Select onChange={(e)=>{setProductsCategory(e.target.value)}}>
                    {
                      categories.map((category) => (
                        <Options>{category}</Options>
                      ))
                    }
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
                      style={{width: "100%"}}
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
                      style={{width: "100%"}}
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
                    style={{width: "100%"}}
                    id="price"
                    type="number"
                    value={productsPrice1}
                    required
                    onChange={(e)=>{setProductsPrice1(e.target.value)}}
                    /> 원
                  </Price>
                  <Price style={{display: "flex"}}>
                    <ProductInput 
                      style={{width: "100%"}}
                      id="price"
                      type="number"
                      value={productsPrice2}
                      required
                      onChange={(e)=>{setProductsPrice2(e.target.value)}}
                    /> 원
                  </Price>
                </DetailPrice>

                <BtnWrap>
                  <AddCartBtn style={{padding: "10px 15px"}}>
                    상품 업로드하기
                  </AddCartBtn>
                </BtnWrap>
              </Detail>
            </DetailContent>
          </DetailInner>
        </DetailBase>

      </Mobile>
    </>
  )
}



const DetailBase = styled.section`
margin-top: 50px;
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

const DetailContent = styled.form`
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
`

const ProductDes = styled.textarea`
width: 90%;
height: 100px;
outline: none;
resize: none;
border: 1px solid #bbb;
`


const Detail = styled.div`
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