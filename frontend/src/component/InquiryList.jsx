import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getList } from '../redux/actions/board_actions'

export default function InquiryList() {
  const dispatch = useDispatch()
  const idUser = useSelector((state) => state.cart.idUser)


  const [ lists, setLists ] = useState([])
  const [ isContent, setIsContent ] = useState(true)


  useEffect(() => {
    dispatch(getList())
    .then((res) => {
      const data = res.payload.data
      let sortData = data.sort((a,b) => {return b.idBoard - a.idBoard});
      setLists(sortData)
    })
  },[])


  const showContent = (user) => {
    if(idUser !== user) {
      alert('비밀글입니다.')
      setIsContent(false)
    } else {
      setIsContent(!isContent)
    }
  }

  const InquiryLists = 
<InquiryTbody>
  {
    lists.map(list => (
      <>
        <InquiryTr key={list.idBoard} onClick={()=>{showContent(list.idUser)}}>
          <InquiryTd className="num">{list.idBoard}</InquiryTd>
          <InquiryTd>{list.BoardTitle}</InquiryTd>
          <InquiryTd className="name">{list.BoardWriter}</InquiryTd>
        </InquiryTr>
        <InquiryTr className="contents" isClicked={list.idUser === idUser ? false : true} >
          <InquiryTd isContent={isContent} className="contents"></InquiryTd>
          <InquiryTd isContent={isContent} className="contents">{list.BoardContents}</InquiryTd>
        </InquiryTr>
      </>
    ))
  }
</InquiryTbody>



  return (
    <InquiryBase>
      <InquiryInner>
        <InquiryContent>
          <InquiryTitle>CUSTOMER SEVICE</InquiryTitle>
          <InquirySection>
            <InquiryTable>

              <InquiryThead>
                <InquiryTr>
                  <InquiryTh>No.</InquiryTh>
                  <InquiryTh>제목</InquiryTh>
                  <InquiryTh>작성자</InquiryTh>
                </InquiryTr>
              </InquiryThead>
              {InquiryLists}

            </InquiryTable>
          </InquirySection>
        </InquiryContent>
      </InquiryInner>
    </InquiryBase>
)}

const InquiryBase = styled.div`
background-color: #ddd6d0;
font-family: 'AppleSDGothicNeo';
`

const InquiryInner = styled.div`
margin: 0 auto;
`
const InquiryContent = styled.div`
margin-top: 50px;
`

const InquiryTitle = styled.h1`
width: 100%;
font-size: 18px;
font-weight: bold;
color: #333;
display: inline-block;
padding: 0 0 10px;
margin-left: 8px;
`

const InquirySection =styled.section`
border-top: 1px solid black;
width: 100%;
`


const InquiryTable =styled.table`
width: 100%;
font-size: 12px;
`
const InquiryThead = styled.thead`
display: table-header-group;
vertical-align: middle;
`
const InquiryTr = styled.tr`
display: table-row;
&.contents {
  display: ${(props) => props.isClicked ? 'none' : 'display'};
}
`

const InquiryTh =styled.th`
display: table-cell;
padding: 18px 10px;
text-align: center;
border-bottom: 1px solid #ddd;
background: #d1c9bf;
`

const InquiryTbody = styled.tbody`
display: table-row-group;
vertical-align: middle;
`

const InquiryTd = styled.td`
color: #666;
padding: 18px 10px;
border-bottom: 1px solid #ddd;
text-align: center;


&.num {
  width: 15%;
}
&.name {
  width: 10%;
}
&.contents {
  display: ${(props) => props.isContent ? 'none' : 'display'};
  color: black;
}
`