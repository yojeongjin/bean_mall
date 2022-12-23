import React from "react";
import styled from "styled-components";

export default function Layout({children}) {
  return (
    <LayoutBase>
      <Inner>
        {children}
      </Inner>
    </LayoutBase>
  )
}

const LayoutBase = styled.div`
float: right;
width: calc(100vw - 450px);
margin-top:100px;
`
const Inner = styled.div`
width: 700px;
margin: 0 auto;
`
