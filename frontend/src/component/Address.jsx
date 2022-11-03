import React, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import styled from 'styled-components'

export default function Address({setAddress}) {
  const [openPostcode, setOpenPostcode] = useState(false)



  const handlePostCode = {
    clickButton: () => {
      setOpenPostcode(current => !current)
    },

    selectAddress: (data) => {
      console.log(`
        주소: ${data.address},
        우편번호: ${data.zonecode}
      `)
      setOpenPostcode(false);
      setAddress({
        postcode: data.zonecode,
        defaultAddr: data.address
      })
    }
  }

  const addressStyle = {
    background : 'rgba(0,0,0,0.25)',
    position : 'fixed',
    height: '400px',
    width: '400px'
  }

  return (
    <AddressBase>
    <AddressButton onClick={handlePostCode.clickButton}>우편번호</AddressButton>

    {openPostcode && 
        <DaumPostCode 
            onComplete={handlePostCode.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
            style={addressStyle}
            />}
    </AddressBase>
  )
}

const AddressBase = styled.div`
`
const AddressButton = styled.button`
border: 1px solid black;
padding: 5px 5px;
font-size: 13px;
`

