import axios from "axios";
import { GET_PRODUCT } from "./types";
import { ALL_PRODUCT } from "./types";

export function getProduct() {
  const res = axios.get('http://52.78.53.87:5000/api/products')
  .then (res => res.data)
  return {
    type: GET_PRODUCT,
    payload: res
  }
} 

export function allProducts(body) {
  const res = axios.post('http://52.78.53.87:5000/api/products',body)
  .then (res => res.data)
  return {
    type: ALL_PRODUCT,
    payload: res
  }
}