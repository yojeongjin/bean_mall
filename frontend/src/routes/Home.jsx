import React from 'react'
import Header from '../component/Home/Header';
import Main from '../component/Home/Main';
import Report from '../component/Home/Report';
import HomeVideo from '../component/Home/HomeVideo';
import PerfumeReport from '../component/Home/PerfumeReport';
import Gift from '../component/Home/Gift';
import Footer from '../component/Home/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Report />
      <PerfumeReport />
      <HomeVideo />
      <Gift />
      <Footer />
    </>
  )
}