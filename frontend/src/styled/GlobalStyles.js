import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Com4 from './COM4t-Fine-Regular.ttf.woff'

import AppleSDGothicNeoL from './AppleSDGothicNeoL.ttf'
import AppleSDGothicNeoH from './AppleSDGothicNeoH.ttf'
import AppleSDGothicNeoEB from './AppleSDGothicNeoEB.ttf'
import AppleSDGothicNeoSB from './AppleSDGothicNeoSB.ttf'
import AppleSDGothicNeoT from './AppleSDGothicNeoT.ttf'
import AppleSDGothicNeoUL from './AppleSDGothicNeoUL.ttf'

import Orelo from './Orelo-SemiWide-Light.ttf'

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Orelo';
    src: local('Orelo');
    src: url(${Orelo}) format('truetype');
  }

  @font-face {
    font-family: 'Com4';
    src: local('Com4');
    src: url(${Com4}) format('truetype');
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    src: local('AppleSDGothicNeoH');
    src: url(${AppleSDGothicNeoH}) format('truetype');
  }  


  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 600;
    src: local('AppleSDGothicNeoEB');
    src: url(${AppleSDGothicNeoEB}) format('truetype');
  }  

  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 500;
    src: local('AppleSDGothicNeoSB');
    src: url(${AppleSDGothicNeoSB}) format('truetype');
  }  


  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 400;
    src: local('AppleSDGothicNeoL');
    src: url(${AppleSDGothicNeoL}) format('truetype');
  }  

  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 300;
    src: local('AppleSDGothicNeoUL');
    src: url(${AppleSDGothicNeoUL}) format('truetype');
  }  

  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 200;
    src: local('AppleSDGothicNeoT');
    src: url(${AppleSDGothicNeoT}) format('truetype');
  }  


  * {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  line-height: inherit;

  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  a {
    text-decoration: none;
  }
  button {
    border: 0 none;
    outline:none;
    background: transparent;
    cursor: pointer;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
  }
  ol, ul {
    list-style: none;
  }
  .inner {
    width: 1100px;
    margin: 0 auto;
    position: relative;
  }
  a, button, .tab, input {
    -webkit-tap-highlight-color: transparent;
  }
`

export default GlobalStyles;