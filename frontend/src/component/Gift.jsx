import styled from 'styled-components'
import giftbg from '../assets/giftbg.png'


export default function Gift() {
  return (
    <GiftBase>
      <GiftInner>
        <GiftContent>
          <span>메시지 각인 및 선물 포장 서비스</span>
          <h1>특별한 선물에 각별함까지 담는 법</h1>
          <p>진심을 담은 선물옵션으로 특별한 선물을 전하세요. <br></br>
            각인서비스를 이용하여 자신만의 이야기를 새겨보세요. </p>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
        </GiftContent>
      </GiftInner>
    </GiftBase>
  )
}

const GiftBase = styled.section`
background-image: url(${giftbg});
background-color: #fdfdf3;
`
const GiftInner = styled.div`
width: 1100px;
height: 300px;
position: relative;
margin: 0 auto;
`

const GiftContent = styled.div`
width: 500px;
height: 100%;
margin: 0 auto;
font-family: 'Noto Sans KR';

> span {
  font-size: 13px;
  font-weight: 500;
  color: #555555;
  display: block;
  margin-bottom: 30px;
  padding-top: 30px;
}
> h1 {
  font-size: 23px;
  font-weight: 500;
  display: block;
  margin-bottom: 30px;
  text-align: center;
}
> p {
  text-align: center;
  font-size: 15px;
  margin-bottom: 25px;
}
`
