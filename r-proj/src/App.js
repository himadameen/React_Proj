import './App.css';
import Crypto from './components/Crypto';
import Stock from './components/Stock';
import Select from './components/Select';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path='/crypto' element={<Crypto/>} />
       <Route path='/stock' element={<Stock/>} />
       <Route path='/' element={<Select />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
