import axios from 'axios'
import { ORDER_INFO } from './types'
import { GET_ORDER_ITEM } from './types'
import { ORDER_COMPLETION } from './types'
import { ADD_HISTORY } from './types'

export function orderInfo(body) {
  const res = axios.post('http://localhost:5000/api/order', body)
          .then (res => res.data)
  return {
    type: ORDER_INFO,
    payload: res
  }
}

export function getOrderItem(idUser) {
  const res = axios.get('http://localhost:5000/api/order', {params: {
    idUser: idUser
  }})
  .then(res => res.data)
  return {
    type:GET_ORDER_ITEM,
    payload: res
  }
}

export function orderCompletion(body) {
  const res = axios.post('http://localhost:5000/api/payment', body)
  .then (res => res.data)
  
  return {
    type: ORDER_COMPLETION,
    payload: res
  }
}

export function addHistory(body) {
  const res = axios.post('http://localhost:5000/api/history', body)
  .then (res => res.data)
  
  return {
    type: ADD_HISTORY,
    payload: res
  }
}