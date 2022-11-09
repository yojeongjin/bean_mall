import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers';

const create = () => {
  const token = localStorage.getItem('m-access-token')

  const store = createStore(rootReducer,
    {
      auth : {
        token
      }
    },
    composeWithDevTools(applyMiddleware(promiseMiddleware,ReduxThunk))
  )

  return store;
}

export default create;