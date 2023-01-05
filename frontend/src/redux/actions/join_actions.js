import axios from 'axios'
import { JOIN_AUTH } from './types'
import { GET_USER } from './types'


export function joinAuth(body) {
  const res = axios.post('https://www.theine.shop/api/users', body)
          .then (res => res.data)
  return {
    type: JOIN_AUTH,
    payload: res
  }
}

export function getUser(idUser) {
  const res = axios.get('https://www.theine.shop/api/getuser', {params: {
    idUser: idUser
  }})
   .then (res => res.data)
  return {
    type: GET_USER,
    payload: res
  }
}


