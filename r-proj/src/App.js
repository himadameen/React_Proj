import './App.css';
import Crypto from './components/Crypto';
import Stock from './components/Stock';
import Select from './components/Select';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Valuetop from './components/Valuetop';
import Nitfy from './components/Nitfy';
import Loss from './components/Loss';
import Profit from './components/Profit';
import Inter from './components/Inter';

function App() {
  return (
    <div className="App">
      {/* <Valuetop/> */}
      <BrowserRouter>
       <Routes>
       <Route path='/inter' element={<Inter/>}/>
        <Route path='/loss' element={<Loss/>}/>
        <Route path='/profit' element={<Profit/>} />
        <Route path='/nifty' element={<Nitfy/>}/>
        <Route path='/valuetop' element={<Valuetop/>} />
       <Route path='/crypto' element={<Crypto/>} />
       <Route path='/stock' element={<Stock/>} />
       <Route path='/' element={<Select />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
