import React from 'react'
import CategoriesProduct from '../component/prototype/CategoriesProduct'
import CategoriesMobile from '../component/prototype/CategoriesMobile'
import { Mobile, Pc } from '../hooks/MediaQuery'



export default function Categories() {
  return (
    <>
      <Pc>
        <CategoriesProduct />
      </Pc>
      <Mobile>
        <CategoriesMobile />
      </Mobile>
    </>
  )
}