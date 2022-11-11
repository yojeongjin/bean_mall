import { combineReducers } from 'redux';
import auth from './auth_reducer'
import cart from './cart_reducer'


const rootReducer = combineReducers({
  auth,
  cart
})

export default rootReducer