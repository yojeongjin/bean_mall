import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styled/GlobalStyles';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './routes/Home';
import Product from './routes/Product';
import NotFound from './routes/NotFound';
import PerfumeInfo from './routes/PerfumeInfo';



function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Switch>
        <Route path="/perfumeinfo" component= {PerfumeInfo} />
        <Route path="/product" component= {Product} />
        <Route path="/" exact component= {Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;