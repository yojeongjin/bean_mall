import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers';

//redux-persist
import { persistStore } from 'redux-persist'


const token = localStorage.getItem('m-access-token')

export const store = createStore(rootReducer,
  {
    auth : {
      token
    }
  },
  composeWithDevTools(applyMiddleware(promiseMiddleware,ReduxThunk))
)

export const persistor = persistStore(store);

export default { store, persistor }