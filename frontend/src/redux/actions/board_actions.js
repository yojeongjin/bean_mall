import axios from 'axios'
import { ADD_TO_BOARD } from './types'
import { GET_LIST } from './types'
import { DELETE_BOARD } from './types'


export function addToBoard(body) {
  const res = axios.post('https://www.theine.shop/api/board', body)
          .then (res => res.data)
  return {
    type: ADD_TO_BOARD,
    payload: res
  }
}

export function getList() {
  const res = axios.get('https://www.theine.shop/api/board')
          .then (res => res.data)
  return {
    type: GET_LIST,
    payload: res
  }
}

export function deleteBoard (idBoard) {
  const res = axios.delete('https://www.theine.shop/api/board', {params: {
    idBoard: idBoard
  }})
  .then (res => res.data)
  return {
    type: DELETE_BOARD,
    payload: res
  }
}