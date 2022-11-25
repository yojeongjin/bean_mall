import React, { useEffect } from 'react'


export default function Payment() {
  useEffect(() => {
    const jquery = document.createElement("script")
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js"
    const iamport = document.createElement("script")
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"
    document.head.appendChild(jquery)
    document.head.appendChild(iamport)
    return () => {
      document.head.removeChild(jquery)
      document.head.removeChild(iamport)
    }
  }, [])

  const onClickPayment = () => {
    const { IMP } = window
    IMP.init("imp60534226")
    const data = {
      pg: "html5_inicis", 
      pay_method: "card", 
      merchant_uid: `mid_${new Date().getTime()}`, 
      name: "결제테스트", 
      amount: "1000",
      custom_data: { name: "부가정보", desc: "세부 부가정보" },
      buyer_name: "구매자이름",
      buyer_tel: "01012345678",
      buyer_email: "iamport@siot.do",
      buyer_addr: "주소",
      buyer_postalcode: "우편번호"
    };
    IMP.request_pay(data, callback);
  };

  const callback = (res) => {
    const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount,status } = res
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>{" "}
    </>
  )
}