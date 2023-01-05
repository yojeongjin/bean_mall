import axios from 'axios'
import { ORDER_INFO } from './types'
import { GET_ORDER_ITEM } from './types'
import { ORDER_COMPLETION } from './types'
import { ADD_HISTORY } from './types'
import { GET_PAYMENT_INFO } from './types'
import { GET_HISTORY } from './types'
import { DELETE_ALL_ORDER } from './types'
import { DELETE_HISTORY } from './types'

export function orderInfo(body) {
  const res = axios.post('https://www.theine.shop/api/order', body)
          .then (res => res.data)
  return {
    type: ORDER_INFO,
    payload: res
  }
}

export function getOrderItem(idUser) {
  const res = axios.get('https://www.theine.shop/api/order', {params: {
    idUser: idUser
  }})
  .then(res => res.data)
  return {
    type:GET_ORDER_ITEM,
    payload: res
  }
}

export function orderCompletion(body) {
  const res = axios.post('https://www.theine.shop/api/payment', body)
  .then (res => res.data)
  
  return {
    type: ORDER_COMPLETION,
    payload: res
  }
}

export function addHistory(body) {
  const res = axios.post('https://www.theine.shop/api/history', body)
  .then (res => res.data)
  
  return {
    type: ADD_HISTORY,
    payload: res
  }
}

export function getPaymentInfo(imp_uid) {
  const res = axios.get('https://www.theine.shop/api/payment', {params: {
    imp_uid: imp_uid
  }})
  .then (res => res.data)
  
  return {
    type: GET_PAYMENT_INFO,
    payload: res
  }
}

export function getHistory(idUser) {
  const res = axios.get('https://www.theine.shop/api/history', {params: {
    idUser: idUser
  }})
  .then (res => res.data)
  
  return {
    type: GET_HISTORY,
    payload: res
  }
}

export function deleteAllOrder(idUser) {
  const res = axios.delete('https://www.theine.shop/api/order', {params: {
    idUser: idUser
  }})
  .then (res => res.data)
  
  return {
    type: DELETE_ALL_ORDER,
    payload: res
  }
}

export function deleteHistory(merchant_uid) {
  const res = axios.delete('https://www.theine.shop/api/history', {params: {
    merchant_uid: merchant_uid
  }})
  .then (res => res.data)
  
  return {
    type: DELETE_HISTORY,
    payload: res
  }
}
