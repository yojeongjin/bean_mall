import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from './styled/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme'
import './styled/fonts.css'
import Home from './routes/Home';
import Product from './routes/Product';
import NotFound from './routes/NotFound';
import PerfumeInfo from './routes/PerfumeInfo';
import ProductDetail from './routes/ProductDetail';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Mypage from './routes/Mypage';
import Cart from './routes/Cart';
import Header from './component/Home/Header';
import KakaoLogin from './routes/KakaoLogin';
import Footer from './component/Home/Footer';
import ScrollToTop from './component/ScrollToTop';
import AlwaysScrollTop from './routes/AlwaysScrollTop';
import About from './routes/About';
import Upload from './routes/Upload';
import Categories from './routes/Categories';
import MyOrder from './routes/MyOrder';
import FandQ from './routes/FandQ';
import InquiryBoard from './routes/InquiryBoard';
import InquiryItem from './routes/InquiryItem';

function App() {
  return (
    <BrowserRouter>
      <AlwaysScrollTop />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Header />
          <ScrollToTop />
          <main>
            <Switch>
              <Route path="/inquirylist" component={InquiryItem} />
              <Route path="/board" component={InquiryBoard} />
              <Route path="/faq" component={FandQ} />
              <Route path="/myordercheck" component={MyOrder} />
              <Route path="/perfume" component={Categories} />
              <Route path="/hair" component={Categories} />
              <Route path="/body&hand" component={Categories} />
              <Route path="/skincare" component={Categories} />
              <Route path="/upload" component={Upload} />
              <Route path="/about" component={About} />
              <Route path="/kakaoLogin" component= {KakaoLogin} />
              <Route path="/cart" component= {Cart} />
              <Route path="/mypage" component= {Mypage} />
              <Route path="/signup" component= {SignUp} />
              <Route path="/signin" component= {SignIn} />
              <Route path="/product/:idx" component= {ProductDetail} />
              <Route path="/perfumeinfo" component= {PerfumeInfo} />
              <Route path="/product" component= {Product} />
              <Route path="/" exact component= {Home} />
              <Route component={NotFound} />
            </Switch>
          </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;