import './App.scss';
import { Reset } from 'styled-reset'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home';


function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Route path="/" component= {Home} />
    </BrowserRouter>
  );
}

export default App;