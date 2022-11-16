import React, { useEffect } from 'react'
import axios from 'axios'
import { REST_API_KEY, REDIRECT_URI } from '../kakaoAuth';

export default function KakaoLogin() {
  let params = new URL(window.location.href)
  let code = params.searchParams.get('code')

  useEffect( ()=> {
    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    {
      headers: {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
    })
    .then((res) => {
      console.log(res)
    })
  }, [])

  return <div>잠시만 기다려 주세요! 로그인 중입니다.</div>;
};

