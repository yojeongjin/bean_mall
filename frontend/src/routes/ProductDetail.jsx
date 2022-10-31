import styled from 'styled-components'
import { useState } from 'react'


export default function Product() {
  const [ value, setValue ] = useState('20mL')


  const valueLists = ['20mL', '50mL']
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
  return (
    <DetailBase>
      <DetailInner>
        <DetailBanner></DetailBanner>

        <DetailContent>
          <DetailImg></DetailImg>
          <Detail>
            <DetailTitle></DetailTitle>
            <DetailExp></DetailExp>

            <DetailInfo>
              <h3>사용감</h3>
              <span>부드러운, 상쾌한, 촉촉한</span>
              <h3>주요성분</h3>
              <span>어쩌구 저쩌구, 샬랄라, 루루루루룰</span>
            </DetailInfo>
        
            <DetailRadioGroup>
              <h3>사이즈</h3>
              <DetailRadio>
                {Radio}
              </DetailRadio>
            </DetailRadioGroup>

            <DetailPrice>
              <h3>가격</h3>
            </DetailPrice>
          </Detail>
        </DetailContent>
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
border: 1px solid black;
width: 80%;
height: 550px;
margin-top: 100px;
display: flex;
`
const DetailImg = styled.div`
border: 1px solid orange;
flex: 1;
`

const Detail = styled.div`
flex: 1;
`

const DetailTitle = styled.div`
height: 60px;
`

const DetailExp = styled.div`
border-bottom: 2px solid black;
height: 120px;
margin: 20px auto;
`

const DetailInfo = styled.div`
margin-bottom: 10px;
> h3 {
  font-weight: 500;
  font-size: 15px;
  padding: 5px 0;
}
> span {
  font-size: 13px;
  color: #333;
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
}
`