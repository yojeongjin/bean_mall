import axios from 'axios'
import { LOGIN_AUTH } from './types' 
import { LOGOUT_AUTH } from './types'
import { KAKAO_AUTH } from './types'


export function loginAuth(body) {
  const res = axios.post('http://localhost:5000/api/signin', body)
          .then (res => res.data)
  return {
    type: LOGIN_AUTH,
    payload: res
  }
}

export function logoutAuth(payload) {
  const res = axios.get('http://localhost:5000/api/signin', payload)
          .then (res => res.data)
  return {
    type: LOGOUT_AUTH,
    payload: res
  }
}

export function kakaoAuth(payload) {
  const res = axios.get('http://localhost:5000/api/kakao', payload)
          .then (res => res.data)
  return {
    type: KAKAO_AUTH,
    payload: res
  }
}
