import { combineReducers } from 'redux';
import auth from './auth_reducer'
import cart from './cart_reducer'
import join from './join_reducer'
import board from './board_reducer'
import product from './product_reducer'
import order from './order_reducer'

//reducer-persist
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth']
}

const rootReducer = combineReducers({
  auth,
  cart,
  join,
  board,
  product,
  order
})

export default persistReducer(persistConfig,rootReducer)