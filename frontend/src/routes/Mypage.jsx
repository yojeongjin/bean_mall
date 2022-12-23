import React from 'react'
import MyInfoMenu from '../component/myinfos/MyInfoMenu';
import MyInfo from "../component/myinfos/MyInfo";
import { Mobile, Pc } from '../hooks/MediaQuery';
import Layout from '../component/myinfos/Layout';

export default function Mypage() {
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