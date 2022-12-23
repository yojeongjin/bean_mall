import React from 'react'
import MyInfoMenu from '../component/myinfos/MyInfoMenu';
import Layout from '../component/myinfos/Layout';

import Inquiry from '../component/myinfos/Inquiry';
import { Mobile, Pc } from '../hooks/MediaQuery';

export default function InquiryBoard() {
  return (
    <>
      <Pc>
        <MyInfoMenu />
        <Layout>
          <Inquiry />
        </Layout>
      </Pc>
      <Mobile>
        <MyInfoMenu />
        <Inquiry />
      </Mobile>
    </>
  )
}