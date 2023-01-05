import axios from 'axios'
import { LOGIN_AUTH } from './types' 
import { LOGOUT_AUTH } from './types'
import { KAKAO_AUTH } from './types'


export function loginAuth(body) {
  const res = axios.post('https://www.theine.shopapi/signin', body)
          .then (res => res.data)
  return {
    type: LOGIN_AUTH,
    payload: res
  }
}

export function logoutAuth(payload) {
  const res = axios.get('https://www.theine.shop/api/signin', payload)
          .then (res => res.data)
  return {
    type: LOGOUT_AUTH,
    payload: res
  }
}

export function kakaoAuth(payload) {
  const res = axios.get('https://www.theine.shop/api/kakao', payload)
          .then (res => res.data)
  return {
    type: KAKAO_AUTH,
    payload: res
  }
}
