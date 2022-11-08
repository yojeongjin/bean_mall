import axios from 'axios'
import { LOGIN_AUTH } from './types' 

export function loginAuth(body) {
  const res = axios.post('http://localhost:5000/api/signin', body)
          .then (res => res.data)

  return {
    type: LOGIN_AUTH,
    payload: res
  }
}