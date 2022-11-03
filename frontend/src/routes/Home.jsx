import React from 'react'
import Header from "../component/Header";
import Main from "../component/Main";
import Report from "../component/Report";
import HomeVideo from "../component/HomeVideo";
import PerfumeReport from "../component/PerfumeReport";
import Gift from "../component/Gift";
import Footer from "../component/Footer";

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