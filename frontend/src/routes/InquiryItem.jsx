import React from 'react'
import MyInfoMenu from '../component/myinfos/MyInfoMenu';
import Layout from '../component/myinfos/Layout';

import InquiryList from '../component/myinfos/InquiryList'
import { Mobile, Pc } from '../hooks/MediaQuery';

export default function InquiryItem() {
  return (
    <>
      <Pc>
        <MyInfoMenu />
        <Layout>
          <InquiryList />
        </Layout>
      </Pc>
      <Mobile>
        <MyInfoMenu />
        <InquiryList />
      </Mobile>
    </>
  )
}