import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styled/GlobalStyles';
import Home from './routes/Home';


function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Route path="/" component= {Home} />
    </BrowserRouter>
  );
}

export default App;