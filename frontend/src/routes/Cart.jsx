import React from 'react'
import { Route } from "react-router-dom";
import CartOrder from '../component/CartOrder'
import OrderPage from '../component/OrderPage'

export default function Cart({ match }) {
  return (
    <>
      <Route exact path={match.path} component={CartOrder} />
      <Route path={`${match.path}/order`} component={OrderPage} />
    </>
  )
}