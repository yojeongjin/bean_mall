import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import bodyimg from '../../assets/perfumebgbg.png'


export default function PerfumeReport() {
  return (
    <BodyBase>
      <BodyInner>
        <BodyImg>
          <img src={bodyimg} alt="향수" />
        </BodyImg>
        <BodyContent>
          <span>향수가이드</span>
          <h1>Theine creates a new fragrance</h1>
          <p>
           향이라는 것은 감정과 기억을 자극하는 것에 있어 시각이나 청각보다 훨씬 강력합니다.
           따라서 내가 누구이며 신념은 무엇인지를 알리는 데에 있어 향이라는 것은 특히 중요한 역할을 하게 됩니다.
          </p>
          <p>
            테인은 알코올, 알루미늄, 파라벤, 황산염을 함유하지 않고 꽃, 잎, 줄기 등에서 추출한 <br></br>
            식물성 향료와 천연 오일만을 이용하여 향을 디자인합니다.<br></br>
            <br></br>
            테인에서 당신을 표현해줄 수 있는 시그니처 향수를 만나보세요.
          </p>
          <Link to="/perfumeinfo">
            <BodyBtn>테인 향수가이드
              <span> → </span>
            </BodyBtn>
          </Link>
        </BodyContent>
      </BodyInner>
    </BodyBase>
  )
}

const BodyBase = styled.section`
// background-color: #dfd8d4;
background-color: #d6d9dc;
`

const BodyInner = styled.div`
width: 1300px;
height: 600px;
position: relative;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
`

const BodyImg = styled.div `
width: 450px;
height: 500px;
// width: 550px;
// height: 600px;
> img {
  width: 100%;
  height:100%;
}
`

const BodyContent = styled.div`
margin-left: 150px;
width: 460px;
height: 450px;
font-family: 'AppleSDGothicNeo';
color: #21262b;
> span {
  font-size: 13px;
  font-weight: 500;
  display: block;
  margin: 30px 0 25px 0;
}
> h1 {
  font-family: 'Com4';
  font-size: 25px;
  display: block;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid #21262b;
}
> p {
  font-size: 13px;
  margin-bottom: 25px;
}
`
const BodyBtn = styled.button`
border: 1px solid #21262b;
font-family: 'Nanum Barun Gothic', sans-serif;
font-size: 13px;
color: #21262b;
margin-top: 35px;
padding: 12px 12px;
&:hover {
  background-color: #b8bcbf;
  border: 1px solid #b8bcbf;
}
> span {
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  color: #21262b;
  margin-left: 20px;
}
`

// const BodyFloat = styled.div`
// position: absolute;
// bottom: 0px;
// left: 380px;
// width: 350px;
// height: 250px;
// > img {
//   width: 100%;
//   height:100%;
// }
// `