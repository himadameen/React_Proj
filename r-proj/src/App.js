import './App.css';
import './Responsive.css';
import Crypto from './components/Crypto';
import Stock from './components/Stock';
import Home from './components/Home';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Nitfy from './components/Stocks/Nitfy';
import Loss from './components/Stocks/Loss';
import Profit from './components/Stocks/Profit';
import Inter from './components/Stocks/Inter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path='/inter' element={<Inter/>}/>
        <Route path='/loss' element={<Loss/>}/>
        <Route path='/profit' element={<Profit/>} />
        <Route path='/nifty' element={<Nitfy/>}/>
       <Route path='/crypto' element={<Crypto/>} />
       <Route path='/stock' element={<Stock/>} />
       <Route path='/' element={<Home />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
