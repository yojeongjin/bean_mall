import axios from 'axios'
import { ADD_TO_BOARD } from './types'
import { GET_LIST } from './types'


export function addToBoard(body) {
  const res = axios.post('http://localhost:5000/api/board', body)
          .then (res => res.data)
  return {
    type: ADD_TO_BOARD,
    payload: res
  }
}

export function getList() {
  const res = axios.get('http://localhost:5000/api/board')
          .then (res => res.data)
  return {
    type: GET_LIST,
    payload: res
  }
}
