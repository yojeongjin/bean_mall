import React from 'react'
import { Route } from "react-router-dom";
import CartOrder from '../component/order/CartOrder'
import OrderPage from '../component/order/OrderPage'
import CompletedOrder from '../component/order/CompletedOrder';

export default function Cart({ match }) {
  return (
    <>
      <Route exact path={match.path} component={CartOrder} />
      <Route exact path={`${match.path}/order`} component={OrderPage} />
      <Route path={`${match.path}/order/completed`} component = {CompletedOrder} />
    </>
  )
}