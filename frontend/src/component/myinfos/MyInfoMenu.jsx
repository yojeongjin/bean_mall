import React  from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function MyInfoMenu() {
  return (
    <MyInfoMenuBase>
      <Inner>
        <MyInfoNav>
          <MyInfoB>회원정보</MyInfoB>
          <Link to="/mypage">
            <MyInfoSpan>회원 정보 수정</MyInfoSpan>
          </Link>
        </MyInfoNav>

        <MyInfoNav>
          <MyInfoB>주문내역</MyInfoB>
          <Link to="/myordercheck">
            <MyInfoSpan>주문조회</MyInfoSpan>
          </Link>
        </MyInfoNav>

        <MyInfoNav>
          <MyInfoB>고객서비스</MyInfoB>
          <Link to="/faq">
            <MyInfoSpan>자주 묻는 질문</MyInfoSpan>
          </Link>
          <Link to="/board">
            <MyInfoSpan>1:1 문의하기</MyInfoSpan>
          </Link>
          <Link to="/inquirylist">
            <MyInfoSpan>상품 문의 내역</MyInfoSpan>
          </Link>
        </MyInfoNav>

      </Inner>
    </MyInfoMenuBase>
  )
}

const MyInfoMenuBase = styled.div`
@media ${props => props.theme.desktop} {
  float: left;
  width: 450px;
}
@media ${props => props.theme.mobile} {
  padding-top: 50px;
}
`

const Inner = styled.div`

@media ${props => props.theme.desktop} {
  float: right;
  margin-top: 150px;
}
@media ${props => props.theme.mobile} {
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0;
}
`

const MyInfoNav = styled.nav`
margin-top: 10px;
padding-bottom: 11px;
text-align: center;
@media ${props => props.theme.mobile} {
  display: flex;
  flex-direction: column;
  flex: 1;
}
`

const MyInfoB = styled.b`
display: block;
padding-top: 15px;
color: #333;
font-weight: 600;
font-size: 13px;
margin-top: 0;
`

const MyInfoSpan = styled.span`
font-size: 12px;
color: #666;
display: block;
margin: 5px 0 7px 0;
cursor: pointer;
`