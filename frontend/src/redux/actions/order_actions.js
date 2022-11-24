import axios from 'axios'
import { ORDER_INFO } from './types'
import { GET_ORDER_ITEM } from './types'

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

