import './App.css';
import Crypto from './components/Crypto';
import Stock from './components/Stock';
import Select from './components/Select';
import TopNifty from './components/TopNifty';
import Top10Value from './components/Top10Value';
import Top10Profit from './components/Top10Profit';
import Top10Loss from './components/Top10Loss';

import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Indstocks from './components/Indstocks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       {/* <Route path='/top10loss' element={<Top10Loss/>} />
       <Route path='/top10profit' element={<Top10Profit/>} />
       <Route path='/top10value' element={<Top10Value/>} />
       <Route path='/nifty' element={<TopNifty/>} /> */}
       {/* <Route path='/indstocks' element={<Indstocks/>} /> */}
       <Route path='/crypto' element={<Crypto/>} />
       <Route path='/stock' element={<Stock/>} />
       <Route path='/' element={<Select />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
