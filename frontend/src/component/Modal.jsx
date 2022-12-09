import React from 'react'
import styled from 'styled-components'

export default function Modal(props) {
  const { isCancel, close } = props

  const returnCancel = () => {
    isCancel(false)
    close()
  }

  return (
    <ModalBase>
      <ModalCard>
        <ModalHeader></ModalHeader>
        <ModalContent>주문을 취소하시겠습니까?</ModalContent>
        <ModalFooter>
          <ModalBtn type="button" onClick={returnCancel}>확인</ModalBtn>
          <ModalBtn type="button" onClick={()=>{close()}}>취소</ModalBtn>
        </ModalFooter>
      </ModalCard>
    </ModalBase>
  )
}

const ModalBase = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 99;
background-color: rgba(0, 0, 0, 0.6);
`

const ModalCard = styled.div`
width: 90%;
max-width: 450px;
margin: 0 auto;
border: 1px solid black;
border-radius: 0.3rem;
background-color: #fff;
animation: modal-show 0.3s;
overflow: hidden;
`

const ModalHeader = styled.div`
position: relative;
padding: 16px 64px 16px 16px;
background-color: #f1f1f1;
font-weight: 700;
`
const ModalContent = styled.div`
padding: 16px;
border-bottom: 1px solid #dee2e6;
border-top: 1px solid #dee2e6;
text-align: center;
font-size: 14px;
`

const ModalFooter = styled.div`
padding: 12px 16px;
text-align: right;
display: flex;
justify-content: center;
align-items: center;
`

const ModalBtn = styled.button`
padding: 6px 12px;
color: #fff;
background-color: #6c757d;
border-radius: 5px;
font-size: 13px;
&:first-child{
  margin-right: 10px;
}
`