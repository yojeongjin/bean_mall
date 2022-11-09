import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from './styled/GlobalStyles';
import Home from './routes/Home';
import Product from './routes/Product';
import NotFound from './routes/NotFound';
import PerfumeInfo from './routes/PerfumeInfo';
import ProductDetail from './routes/ProductDetail';
import AnotherHeader from './component/AnotherHeader';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Mypage from './routes/Mypage';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <AnotherHeader />
      <Switch>
        <Route path="/mypage" component= {Mypage} />
        <Route path="/signup" component= {SignUp} />
        <Route path="/signin" component= {SignIn} />
        <Route path="/product/:idx" component= {ProductDetail} />
        <Route path="/perfumeinfo" component= {PerfumeInfo} />
        <Route path="/product" component= {Product} />
        <Route path="/" exact component= {Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;