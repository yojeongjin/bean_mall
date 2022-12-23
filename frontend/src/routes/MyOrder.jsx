import React from 'react'
import MyInfoMenu from '../component/myinfos/MyInfoMenu';
import OrderCheck from '../component/myinfos/OrderCheck';
import Layout from '../component/myinfos/Layout';
import { Mobile, Pc } from '../hooks/MediaQuery';

export default function MyOrder() {
  return (
    <>
      <Pc>
        <MyInfoMenu />
        <Layout>
          <OrderCheck />
        </Layout>
      </Pc>
      <Mobile>
        <MyInfoMenu />
        <OrderCheck />
      </Mobile>
    </>
  )
}