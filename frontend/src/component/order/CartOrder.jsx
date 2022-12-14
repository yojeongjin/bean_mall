import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { getCart } from '../../redux/actions/cart_actions'
import { patchCart } from '../../redux/actions/cart_actions'
import { deleteCart } from '../../redux/actions/cart_actions'
import { orderInfo } from '../../redux/actions/order_actions'

import useIduser from '../../hooks/useIduser'

export default function CartOrder({match}) {
  const dispatch = useDispatch()
  const idUser = useIduser()
  const cartData = useSelector((state) => state.cart.getCartInfo)

  const [ isDatas, setIsDatas ] = useState([])
  const [ id, setId ] = useState(0)
  const [ cartQuantity, setCartQuantity ]  = useState('')
  const [ total, setTotal ] = useState(0)
  const [ allPayment, setAllPayment ] = useState(0)
  const [ fee, setFee ] = useState(0)
  const [ deleteId, setDeleteId ] = useState(false)

  const quantitys = [1,2,3,4,5,6,7,8,9,10]

  useEffect(()=>{
    dispatch(getCart(idUser))
    .then((res) => {
      setIsDatas(res.payload)
      calculateTotal(res.payload)
    })
  },[cartQuantity,deleteId,dispatch,idUser])



  const goToOrder = () => {
    window.location.href = `${match.url}/order`
    let body= {
      orders: cartData
    }
    dispatch(orderInfo(body))
  }

  const change = (e, id) => {
    setCartQuantity(e.target.value)
    setId(id)
    modifiedQuantity()
  }

  const modifiedQuantity = useMemo(() => {
    let body = {
      idCart: id,
      CartQuantity: cartQuantity
    }
    dispatch(patchCart(body))
  }, [id,cartQuantity,dispatch])

  const deleteItem = (cartId) => {

    dispatch(deleteCart(cartId))
        .then((res) => {
      alert(res.payload.msg)
      setDeleteId(!deleteId)
    })

  }

  let calculateTotal = (cartDatas) => {
    let total = 0;

    cartDatas.map(cartData => {
      return total += cartData.CartPrice * cartData.CartQuantity
    })
    setTotal(total)
    if (total < 30000) {
      const totalPayment = total + 3000
      setAllPayment(totalPayment)
      setFee(3000)
    } else {
      setAllPayment(total)
    }
  }

  const detailCarts =             
  <CartList>
    {
      isDatas.map(isdata => (
        <CartItem key={isdata.idCart}>
          <CartThumbnail>
            <img src={isdata.CartImg}
              alt="????????????" />
          </CartThumbnail>
          <CartColumn>
            <h3>{isdata.CartName}</h3>
            <p className="category">{isdata.CartFilters}</p>
            <p>{isdata.CartSize}</p>
            <div className="select">
              <Select onChange={(e)=>{change(e,isdata.idCart)}} defaultValue={isdata.CartQuantity}>
              {
                quantitys.map((quantity,idx) => (
                  <Option key={idx}>{quantity}</Option>
                ))
              }
              </Select>
            </div>
          </CartColumn>
          <CartColumnRight>
            <p>{(isdata.CartPrice * isdata.CartQuantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ???</p>
            <button type="button" onClick={()=> {deleteItem(isdata.idCart)}}><span>??????</span></button>
          </CartColumnRight>
        </CartItem>
      ))
    }
</CartList>

  
  if (isDatas.length === 0) {
    return(
      <CartBase>
        <CartInner>
          <CartPage>
            <CartSectionLt>
              <CartNone>??????????????? ?????? ????????? ????????????.</CartNone>
            </CartSectionLt>
            <CartSectionRt>
              <h2>????????????</h2>

              <PriceGroup>
                <PriceList>
                  <div className="label">????????????</div>
                  <div className="value">0???</div>
                </PriceList>
                <PriceList>
                  <div className="label">?????????</div>
                  <div className="value">
                    <span>3?????? ?????? ?????? ??? ????????????</span>
                    0???</div>
                </PriceList>

                <PriceTotal>
                  <div className="label">??? ??????</div>
                  <div className="value">0???</div>
                </PriceTotal>
              </PriceGroup>

              <CartBtnGroup>
                <CartBtn>????????????</CartBtn>
                <CartBtn className="keep">?????? ????????????</CartBtn>
              </CartBtnGroup>
            </CartSectionRt>

          </CartPage>
        </CartInner>
      </CartBase>
    )
  } else {
    return (
      <CartBase>
        <CartInner>
          <CartPage>
            <CartSectionLt>
              {detailCarts}
            </CartSectionLt>

            <CartSectionRt>
              <h2>????????????</h2>

              <PriceGroup>
                <PriceList>
                  <div className="label">????????????</div>
                  <div className="value">{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ???</div>
                </PriceList>
                <PriceList>
                  <div className="label">?????????</div>
                  <div className="value">
                    <span>3?????? ?????? ?????? ??? ????????????</span>
                    {fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ???</div>
                </PriceList>
  
                <PriceTotal>
                  <div className="label">??? ??????</div>
                  <div className="value">{allPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ???</div>
                </PriceTotal>
              </PriceGroup>
  
              <CartBtnGroup>
                <CartBtn onClick={()=>{goToOrder()}}>????????????</CartBtn>
                <CartBtn className="keep">?????? ????????????</CartBtn>
              </CartBtnGroup>

            </CartSectionRt>
          </CartPage>
        </CartInner>
      </CartBase>
    )
  }
}


const CartBase = styled.div`
font-family: 'AppleSDGothicNeo';
margin-top: 50px;
font-size: 12px;
@media ${props => props.theme.mobile} {
  margin: 0;
}
`

const CartInner = styled.div`
width: 1100px;
margin: 0 auto;
@media ${props => props.theme.mobile} {
  width: 370px;
}
`

const CartPage = styled.div`
padding-top: 100px;
display: flex;
justify-content: space-between;
@media ${props => props.theme.mobile} {
  flex-direction: column;
}
`

const CartSectionLt = styled.section`
width: 60%;
color: #343434;

@media ${props => props.theme.mobile} {
  width: 100%;
}
`

const CartSectionRt = styled.section`
width: 35%;
> h2{
  font-size: 17px;
  font-weight: 500;
}

@media ${props => props.theme.mobile} {
  width: 100%;
  margin-top: 100px;
}
`

const CartList = styled.ol`

`

const CartItem = styled.li`
display: flex;
padding: 20px 0;
border-bottom: 1px solid #e6e6e6;
&:last-child {
  border-bottom: none;
}
`

const CartThumbnail = styled.div`
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
  padding: 10px 15px;
  font-size: 12px;
  color: #666;
  vertical-align: top;
  > span {
    border-bottom: 1px solid #aaa;
  }
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
margin-top: 130px;
text-align: center;
color: #333;
font-size: 15px;
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
  background-color: #c5bbb3;
  border: 1px solid #c5bbb3;
  color: #000;
  &:hover {
    border: 1px solid #c5bbb3;
    background-color: transparent;
  }
}
`