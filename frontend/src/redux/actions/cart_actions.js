import axios from 'axios'
import { ADD_TO_CART } from './types' 
import { GET_CART } from './types'

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