import styled from 'styled-components'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function ProductDetail(props) {
  const idx = Number(props.match.params.idx)
  const [ detailDatas, setDetailDatas ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/'+idx, {params: {
      idx: idx
    }})
    .then((res) => {
      setDetailDatas(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  
  const [ value, setValue ] = useState('detailDatas.ProductsSize1')

  const valueLists = ['detailDatas.ProductsSize1', 'detailDatas.ProductsSize2']
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
              <h3>사용감</h3>
              <span>{detailData.ProductsUsing}</span>
              <h3>주요성분</h3>
              <span>{detailData.ProductsMain}</span>
            </DetailInfo>
        
            <DetailRadioGroup>
              <h3>사이즈</h3>
              <DetailRadio>
                {Radio}
              </DetailRadio>
            </DetailRadioGroup>

            <DetailPrice>
              <h3>가격</h3>
              <span>₩ {detailData.ProductsPrice1}</span>
            </DetailPrice>
            <AddCartBtn>카트에 추가하기</AddCartBtn>
          </Detail>
        </>
      ))
    }
</DetailContent>

  return (
    <DetailBase>
      <DetailInner>
        <DetailBanner></DetailBanner>
          {detailProduct}
      </DetailInner>
    </DetailBase>
  )
}



const DetailBase = styled.section`
background-color: #e1d8d1;
margin-top: 50px;
height: 100vh;
font-family: 'Noto Sans KR';
`

const DetailInner = styled.div`
width: 1100px;
margin: 0 auto;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const DetailBanner = styled.div`

`

const DetailContent = styled.div`
width: 80%;
height: 550px;
margin-top: 100px;
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
border-bottom: 2px solid black;
margin: 20px auto;
padding-bottom: 25px;
font-size: 15px;
`

const DetailInfo = styled.div`
margin-bottom: 10px;
> h3 {
  font-weight: 500;
  font-size: 15px;
  padding: 7px 0;
}
> span {
  font-size: 13px;
  color: #333;
  display: block;
  padding-bottom: 5px;
}
`

const DetailRadioGroup = styled.div`
> h3 {
  font-weight: 500;
  font-size: 15px;
  padding-bottom: 5px;
}
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

> h3 {
  font-weight: 500;
  font-size: 15px;
  padding-bottom: 2px;
}
> span {
  font-size: 15px;
}
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