import axios from 'axios'
import { ADD_TO_CART } from './types' 
import { GET_CART } from './types'
import { PATCH_CART } from './types'
import { DELETE_CART } from './types'

export function addToCart(body) {
  const res = axios.post('http://localhost:5000/api/cart', body)
          .then (res => res.data)
  return {
    type: ADD_TO_CART,
    payload: res
  }
}

export function getCart() {
  const res = axios.get('http://localhost:5000/api/cart')
          .then (res => res.data)
  return {
    type: GET_CART,
    payload: res
  }
}

export function patchCart(body) {
  const res = axios.patch('http://localhost:5000/api/cart', body)
          .then (res => res.data)
  return {
    type: PATCH_CART,
    payload: res
  }
}

export function deleteCart(idCart) {
  const res = axios.delete('http://localhost:5000/api/cart', {params:{
    idCart: idCart
  }})
  .then (res => res.data)
  return {
    type: DELETE_CART,
    payload: res
  }
}
