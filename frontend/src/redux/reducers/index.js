import { combineReducers } from 'redux';
import auth from './auth_reducer'
import cart from './cart_reducer'
import join from './join_reducer'

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
  join
})

export default persistReducer(persistConfig,rootReducer)