import axios from 'axios'
import { JOIN_AUTH } from './types'
import { GET_USER } from './types'

export function joinAuth(body) {
  const res = axios.post('http://localhost:5000/api/users', body)
          .then (res => res.data)
  return {
    type: JOIN_AUTH,
    payload: res
  }
}

export function getUser(idUser) {
  const res = axios.get('http://localhost:5000/api/getuser', {params: {
    idUser: idUser
  }})
   .then (res => res.data)
  return {
    type: GET_USER,
    payload: res
  }
}
