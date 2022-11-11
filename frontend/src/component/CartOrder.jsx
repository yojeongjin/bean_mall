import React from 'react'
import styled from 'styled-components'


export default function CartOrder() {
  return (
    <CartBase>
      <CartInner>
        <CartPage>
          <CartSectionLt>

            <CartList>
              <CartItem>
                <CartThumnail>
                  <img src={'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%87%E1%85%A1%E1%84%83%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%86%AB%E1%84%8C%E1%85%A5.png'}
                    alt="제품사진" />
                </CartThumnail>
                <CartColumn>
                  <h3>제품명제품명제품명</h3>
                  <p className="category">카테고리</p>
                  <p>사이즈mL</p>
                  <div className="select">
                    <Select>
                      <Option></Option>
                    </Select>
                  </div>
                </CartColumn>
                <CartColumnRight>
                  <p>32,000원</p>
                  <button type="button">삭제</button>
                </CartColumnRight>
              </CartItem>
            </CartList>

            <CartNone>장바구니에 담긴 상품이 없습니다.</CartNone>
          </CartSectionLt>



          <CartSectionRt>
            <h2>결제내역</h2>

            <PriceGroup>
              <PriceList>
                <div className="label">주문금액</div>
                <div className="value">32,000원</div>
              </PriceList>
              <PriceList>
                <div className="label">배송비</div>
                <div className="value">
                  <span>3만원 이상 구매 시 무료배송</span>
                  0원</div>
              </PriceList>

              <PriceTotal>
                <div className="label">총 금액</div>
                <div className="value">32,000원</div>
              </PriceTotal>
            </PriceGroup>

            <CartBtnGroup>
              <CartBtn>주문하기</CartBtn>
              <CartBtn className="keep">쇼핑 계속하기</CartBtn>

            </CartBtnGroup>


          </CartSectionRt>
        </CartPage>
      </CartInner>
    </CartBase>
  )
}


const CartBase = styled.div`
background-color: #ddd6d0;
font-family: 'AppleSDGothicNeo';
margin-top: 50px;
font-size: 12px;
`

const CartInner = styled.div`
width: 1100px;
height: 100vh;
margin: 0 auto;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
`

const CartPage = styled.div`
padding-top: 100px;
display: flex;
justify-content: space-between;
`

const CartSectionLt = styled.section`
width: 60%;
color: #343434;
`
const CartSectionRt = styled.section`
width: 35%;
> h2{
  font-size: 17px;
  font-weight: 500;
}
`

const CartList = styled.ul`
`

const CartItem = styled.li`
display: flex;
padding: 20px 0;
border-bottom: 1px solid #e6e6e6;
// &:last-child {
//   border: none;   
// }
`

const CartThumnail = styled.div`
width: 54px;
margin-right: 16px;

>img {
  width: 100%;
}
`

const CartColumn = styled.div`
width: calc(70% - 54px);

> h3 {
  margin: 10px 0 0;
  font-size: 13px;
  font-weight: 500;
}
> p {
  margin: 12px 0 0;
  &.category {
    margin: 4px 0 0;
  }
}

> div {
  margin: 10px 0 0;
}
`

const CartColumnRight = styled.div`
position: relative;
margin-left: auto;
text-align: right;
width: 25%;

> p {
  font-weight: 600;
  position: absolute;
  left: auto;
  right: 5px;
}
> button {
  position: absolute;
  left: auto;
  right: 5px;
  bottom: 0;
  line-height: 1;
  border-bottom: 1px solid #aaa;
  padding: 0;
  font-size: 12px;
  color: #aaa;
  vertical-align: top;
}
`

const Select = styled.select`
  width: 70px;
  height: 28px;
  font-size: 12px;
  margin-right: 7px;
  border: 1px solid #aaa;
  outline: none;
`
const Option = styled.option``

const PriceGroup = styled.div`
margin: 25px auto 17px;
padding-top: 10px;
border-top: 2px solid black;
letter-spacing: -0.09px;
`

const PriceList = styled.div`
font-weight: 500;
display: flex;
border-bottom: 1px solid #c6c6c6;
height: 40px;
line-height: 40px;
font-size: 12px;
> .label {
  width: 45%;
  text-align: left;
}
> .value {
  width: 65%;
  text-align: right;
  > span {
    font-size: 9px;
    color: #848484;
    padding-right: 10px;
    font-weight: 400;
  }
}
`

const PriceTotal = styled.div`
display: flex;

> div {
  width: 50%;
  height: 43px;
  font-size: 13px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: -0.13px;
}

> .value {
  text-align: right;
}
`

const CartNone = styled.div`
margin-top: 20px;
text-align: center;
color: #333;
font-size: 13px;
`

const CartBtnGroup = styled.div`

`

const CartBtn = styled.button`
width: 100%;
height: 50px;
border: 1px solid #807974;
margin-top: 10px;
font-size: 13px;
background-color: #807974;
color: #fff;
&:hover {
  background-color: #443f3c;
}
&.keep {
  background-color: transparent;
  color: #000;
  &:hover {
    border: 1px solid #c5bbb3;
    background-color: #c5bbb3;
  }
}
`