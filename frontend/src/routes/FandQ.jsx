import React from 'react'
import MyInfoMenu from '../component/myinfos/MyInfoMenu';
import Layout from '../component/myinfos/Layout';
import FAQ from '../component/myinfos/FAQ';
import { Mobile, Pc } from '../hooks/MediaQuery';

export default function FandQ() {
  return (
    <>
      <Pc>
        <MyInfoMenu />
        <Layout>
          <FAQ />
        </Layout>
      </Pc>
      <Mobile>
        <MyInfoMenu />
        <FAQ />
      </Mobile>
    </>
  )
}