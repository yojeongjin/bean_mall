import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <div className="inner">
        <div className="logo">
          <Link to="/"><img src={logo}  alt="로고" className="logo-img"/></Link>
        </div>

        <div class="sub-menu">
          <ul class="menu">
            <li>
              <Link to="/" className="link">Sign In</Link>
            </li>
            <li>
              <Link to="/" className="link">Sign Up</Link>
            </li>
            {/* <li>
              <Link to="/">미정</Link>
            </li>
            <li>
              <Link to="/">미정</Link>
            </li> */}
          </ul>
        </div>

        <ul className="main-menu">
          <li className="item">
            <Link to="/" className="link">스킨케어</Link>
            <Link to="/" className="link">바디&핸드</Link>
            <Link to="/" className="link">헤어</Link>
            <Link to="/" className="link">향수</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}