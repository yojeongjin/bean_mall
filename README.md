# Theine | 테인

> 개발기간 : 2022.11.01 ~ 2022.12.09 (5주)  
개발 인원: 1명 (개인 프로젝트)  



# 프로젝트 소개

🛍 이 프로젝트는 노드와 리액트로 회원가입, 로그인, 카카오로그인, 상품 조회/장바구니/구매 등 다양한 쇼핑몰 서비스를 제공하기 위해 만들어졌습니다.  
🛍 결제 API를 연동하여 실제 거래가 가능하지만 당일 자정에 모두 환불됩니다.  
🛍 관리자 계정으로 로그인 시 상품의 상품 등록/수정/삭제/품절처리가 가능합니다.  

# 사용 기술 스택

* Frontend : <img src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=fff" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=fff" /> <img src="https://img.shields.io/badge/styled-components-DB7093?style=plastic&logo=styled-components&logoColor=fff" /> <img src="https://img.shields.io/badge/Redux-764ABC?style=plastic&logo=Redux&logoColor=fff" />   

* Backend : <img src="https://img.shields.io/badge/Node.js-339933?style=plastic&logo=Node.js&logoColor=fff" />  <img src="https://img.shields.io/badge/Express-000?style=plastic&logo=Express&logoColor=fff" /> <img src="https://img.shields.io/badge/NGINX-009639?style=plastic&logo=NGINX&logoColor=fff" />   
* DataBase : <img src="https://img.shields.io/badge/MySQL-4479A1?style=plastic&logo=MySQL&logoColor=fff" /> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=plastic&logo=Amazon S3&logoColor=fff" />
* Hosting : <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=plastic&logo=Amazon AWS&logoColor=fff" />


# API 설계

#### 🙋🏻 회원가입
|Feature|Request|API|설명|
|------|---|---| ---|
|회원가입|POST|/users|회원 정보 DB 전송 및 JWT토큰 발급|
|회원조회|GET|/join|회원 정보 추가 기입 및 수정|
|회원조회|PATCH|/join|회원가입 중복 방지|


#### 🙋🏻 로그인
|Feature|Request|API|설명|
|------|---|---| ---|
|로그인|POST|/signin|회원 정보 DB 전송 및 JWT토큰 발급|
|카카오 로그인|GET|/kakao|access_token을 이용하여 회원가입 및 로그인|
|로그인|GET|/signin|JWT 토큰 유효성 검사|

#### 💄 상품
|Feature|Request|API|설명|
|------|---|---| ---|
|상품목록|GET|/products|상품 목록 조회. 상품명,상품사진 등 정보 포함|
|상품조회|GET|/products/{idx}|상품 idx에 대한 상품 조회|
|카테고리 별 조회|GET|/category|상품 카테고리 별 조회|


#### 🛍 장바구니
|Feature|Request|API|설명|
|------|---|---| ---|
|상품조회|GET|/cart|장바구니 내 상품 조회|
|상품추가|POST|/cart|장바구니 내 상품 추가|
|상품수정|PATCH|/cart|장바구니 내 상품에 대한 특정 정보 수정|
|상품삭제|DELETE|/cart|장바구니 내 상품 삭제|

#### 💰 결제
|Feature|Request|API|설명|
|------|---|---| ---|
|상품결제|POST|/payment|상품 정보 DB 전송 및 결제진행|
|주문조회|GET|/history|주문 정보 조회|
|결제저장|POST|/history|결제 정보 DB 전송|
|주문취소|DELETE|/history|주문 취소|


#### 👷🏻 관리자 
|Feature|Request|API|설명|
|------|---|---| ---|
|상품등록|POST|/upload|상품 정보 DB 전송|
|상품수정|PATCH|/upload|상품 특정 정보 수정|
|상품삭제|DELETE|/products|상품 삭제|
|상품품절처리|PATCH|/products|상품 상태 변경 처리|
