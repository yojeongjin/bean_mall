import React from 'react'
import Main from '../component/Home/Main';
import Report from '../component/Home/Report';
import HomeVideo from '../component/Home/HomeVideo';
import PerfumeReport from '../component/Home/PerfumeReport';
import Gift from '../component/Home/Gift';

export default function Home() {
  return (
    <>
      <Main />
      <Report />
      <PerfumeReport />
      <HomeVideo />
      {/* <Gift /> */}
    </>
  )
}