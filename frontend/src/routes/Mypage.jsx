import React from 'react'
import MyInfoMenu from '../component/myinfos/MyInfoMenu';
import MyInfo from "../component/myinfos/MyInfo";
import { Mobile, Pc } from '../hooks/MediaQuery';
import Layout from '../component/myinfos/Layout';
import useToken from '../hooks/useToken';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function Mypage() {
  const token = useToken()
  if (token === null) {
    return <Redirect to="/signin" />
  }
  return (
    <>
      <Pc>
        <MyInfoMenu />
        <Layout>
          <MyInfo />
        </Layout>
      </Pc>
      <Mobile>
        <MyInfoMenu />
        <MyInfo />
      </Mobile>
    </>
  )
}