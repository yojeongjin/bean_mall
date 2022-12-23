import React from 'react'
import Prototype from "../component/prototype/Prototype"
import PrototypeMobile from '../component/prototype/PrototypeMobile'
import { Mobile, Pc } from '../hooks/MediaQuery'



export default function Product() {
  return (
    <>
      <Pc>
        <Prototype />
      </Pc>
      <Mobile>
        <PrototypeMobile />
      </Mobile>
    </>
  )
}