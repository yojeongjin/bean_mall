import React from 'react'
import styled from 'styled-components'


export default function OrderCheck() {

  return (
    <CheckBase>
      <CheckInner>
        <CheckContent>
          <CheckTitle>최근 주문 내역</CheckTitle>
          <CheckTableSection>
            <CheckTable>
              <CheckThead>
                <CheckTr>
                  <CheckTh>상품정보</CheckTh>
                  <CheckTh>진행상태</CheckTh>
                  <CheckTh className="date">주문일자</CheckTh>
                </CheckTr>
              </CheckThead>
              <CheckTbody>
                <CheckTr>
                  <CheckTd>
                    <div className="tdflex">
                      <div className="tdimg">
                        <img src={'https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/bodycleanser.png'}  alt="제품사진" />
                      </div>
                      <div className="tddes">
                        <h3>어저구저저구 헤어트리트먼트</h3>
                        <span>20ml</span>
                        <span className="pandq">35,000원</span> / <span className="pandq">1개</span>
                      </div>
                    </div>
                  </CheckTd>
                  <CheckTd>
                    <div className="tdstatus">상품준비중</div>
                  </CheckTd>
                  <CheckTd>
                    <div className="tdbtns">
                      <button>주문 취소</button>
                    </div>
                    <div className="tdbtns">
                      <button>반품 / 교환</button>
                    </div>
                    <div className="tdbtns">
                      <button>배송 조회</button>
                    </div>
                  </CheckTd>
                </CheckTr>
              </CheckTbody>
            </CheckTable>
          </CheckTableSection>
        </CheckContent>

      </CheckInner>
    </CheckBase>
  )
}

const CheckBase = styled.div`
background-color: #ddd6d0;
`
const CheckInner = styled.div`
margin: 0 auto;
`

const CheckContent = styled.div`
margin-top: 50px;
`
const CheckTitle = styled.h2`
width: 100%;
font-size: 18px;
font-weight: 600;
color: #333;
display: inline-block;
padding: 0 0 10px;
margin-left: 8px;
`

const CheckTableSection = styled.section`
border-top: 2px solid black;
width: 100%;
`

const CheckTable = styled.table`
margin: 25px auto;
`

const CheckThead = styled.thead`
display: table-header-group;
border-bottom: 1px solid #333;
`

const CheckTr = styled.tr`
display: table-row;
`
const CheckTh = styled.th`
padding: 10px 10px;
text-align: left;
font-size: 14px;

&.date {
  text-align: end;
}
`
const CheckTbody = styled.tbody`
display: table-row-group;
border-bottom: 1px solid #aaa;
// &:last-child {
//   border: none;   
// }
`
const CheckTd = styled.td`
padding: 16px 20px;
vertical-align: middle;

> .tdflex {
  display: flex;
  > .tdimg {
    img {
      width: 80px;
      height: 150px;
    }
  }
  > .tddes {
    height: 150px;
    margin-left: 20px;
    padding-top: 50px;
    >h3 {
      font-size: 14px;
    }
    span {
      display: block;
      font-size: 13px;
      color: #333;
      &.pandq{
        display: inline-box;
        color: black;
      }
    }
  }
}

>.tdstatus {
  font-size: 13px;
  padding-bottom: 40px;
  color: #333;
}
>.tdbtns {
  margin-left: 220px;
  font-size: 14px;
  color: #333;
  > button {
    width: 100%;
    font-size: 13px;
    border: 1px solid #959595;
    padding: 8px 10px;
    margin: 5px 0;
    &:hover {
      color: black;
      border: 1px solid black;
    }
  }
}
`