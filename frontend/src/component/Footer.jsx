import styled from 'styled-components'


export default function Footer() {
  return (
    <FooterBase>
      <FooterInner>
        <FooterCopyRight></FooterCopyRight>
        <FooterMenu></FooterMenu>
        <FooterInfo></FooterInfo>
      </FooterInner>
    </FooterBase>
  )
}

const FooterBase = styled.section`
background-color: #dfd8d4;
color: #bcb6b1;
`

const FooterInner = styled.div`
width: 1100px;
height: 200px;
position: relative;
margin: 0 auto;
display: flex;
`

const FooterCopyRight = styled.div`
flex: 1;
border: 1px solid #bcb6b1;
`

const FooterMenu = styled.div`
flex: 1;
border: 1px solid #bcb6b1;
`

const FooterInfo = styled.div`
flex: 1;
border: 1px solid #bcb6b1;
`