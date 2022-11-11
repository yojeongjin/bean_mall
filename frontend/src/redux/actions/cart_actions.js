import axios from 'axios'
import { ADD_TO_CART } from './types' 

export function addToCart(body) {
  const res = axios.post('http://localhost:5000/api/cart', body)
          .then (res => res.data)
  return {
    type: ADD_TO_CART,
    payload: res
  }
}