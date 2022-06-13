import React from 'react'
import {Link} from 'react-router-dom';



const Select = () => {
  return (
   <>       
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