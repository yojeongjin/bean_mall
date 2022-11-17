import axios from 'axios'
import { JOIN_AUTH } from './types'

export function joinAuth(body) {
  const res = axios.post('http://localhost:5000/api/users', body)
          .then (res => res.data)
  return {
    type: JOIN_AUTH,
    payload: res
  }
}

