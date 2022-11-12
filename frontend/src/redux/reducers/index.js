import { combineReducers } from 'redux';
import auth from './auth_reducer'
import cart from './cart_reducer'

//reducer-persist
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  auth,
  cart
})

export default persistReducer(persistConfig,rootReducer)