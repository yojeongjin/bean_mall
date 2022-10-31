import styled from 'styled-components'

export default function Product() {
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
border: 1px solid red;
flex: 1;
`

const DetailTitle = styled.div`
border: 1px solid black;
height: 60px;
`

const DetailExp = styled.div`
border-bottom: 2px solid black;
height: 120px;
margin: 20px auto;
`

const DetailInfo = styled.div`
border: 1px solid black;
`