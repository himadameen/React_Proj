import React, { useState } from 'react'
import {Link} from 'react-router-dom';



const Select = () => {

  let ti = new Date().toLocaleTimeString();

  const [time , setTime] = useState(ti);

  const clock = () => {
    ti = new Date().toLocaleTimeString();
    setTime(ti)
  }

  setInterval(clock, 1000)




  return (
   <>     
          <div id='star'>  
          <div>
            <h2>It's a Right Time To Know and Invest</h2>
          </div>
          <br></br>
          <div id='clock'>
              <div id='first'><span id='hour'>00</span><span>Hours</span></div>
              <div><span id='minute'>00</span><span>Minutes</span></div>
              <div><span id='second'>00</span><span>Seconds</span></div>
          </div>
          <br></br>
          </div>
            <div className='select'>
            <div id='crs'>
                <Link to='/crypto' className='crypto' >CryptoCurrency</Link>
            </div>
            <div id="stocks">        
                <Link to='/stock' className='stock' >Stock</Link>
            </div>
            </div>
       
            </>
 
  )
}

export default Select