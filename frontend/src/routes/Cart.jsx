import { Route } from "react-router-dom";
import CartOrder from '../component/order/CartOrder'
import OrderPage from '../component/order/OrderPage'
import CompletedOrder from '../component/order/CompletedOrder';
import useToken from '../hooks/useToken';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function Cart({ match }) {
  const token = useToken()
  if (token === null) {
    return <Redirect to="/signin" />
  }
  return (
    <>
      <Route exact path={match.path} component={CartOrder} />
      <Route exact path={`${match.path}/order`} component={OrderPage} />
      <Route path={`${match.path}/order/completed`} component = {CompletedOrder} />
    </>
  )
}