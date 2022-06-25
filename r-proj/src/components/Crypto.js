import React, { useEffect, useState } from 'react'
import '../App.css';
// import './Responsive.css';

const Crypto = () => {

    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState('');
    const [error, SetError] = useState({});
    const [er, SetEr] = useState(false);

    const api = async() => {
        let url = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        let data = await url.json()
        setCoin(data);       
    }

    useEffect(() => {
        api();
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
        const err = validateForm(e.target.value);
        SetError(err);
       
    }

    const filterCoins = coin.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
        
    ) 

      // Error Handling ::

    const validateForm = () => {
      let err = {};
      if(!search.match(/[A-Za-z]/)) {
          err.search = "Please, Enter non - Digit Character"
          SetEr(true); 
      }
      return err;
  }


  return (
    <>
    <div className='crypto-page ' id='cryp'>
        <h3 id='headd'>Top <span id='ma'> Crypto</span> <span id='st'>Currency</span>  List</h3>
        <div id='cryp-coin'>
            
        <div id='input-box'>
            <input type='text' placeholder="Enter the Coin Name" onChange={handleChange} value={search}  />
        </div>
        <br></br><br></br>
        {er && error.search ? (
          <div id='err'>{error.search}</div>
        ):(
          <div>     
    {
        filterCoins.length > 0 ? (
          <div class='container'>
            <table class="table table-striped" id="tab_crypto">
    <thead>
    <tr className='header'>
      <th scope="col" className='head'>Logo</th>
      <th scope="col" className='head'>Name</th>
      <th scope="col" className='head'>Current Price</th>
      <th scope="col" className='head'>Rank</th>
      <th scope="col" className='head'>Market CAP</th>
    </tr>
  </thead>
    {filterCoins && filterCoins.map((item) => (
            <>
  <tbody>
    <tr>
      <th scope="row"><div className='image'><img src={item.image} alt='logo'></img></div></th>
      <td><div className='cname' id='cname'>{item.name}</div></td>
            <td><div className='cp' id='cp'>${item.current_price}</div></td>
            <td><div className='mcr' id='mcr'>{item.market_cap_rank}</div></td>
            {item.price_change_percentage_24h < 0 ? (
              <td><div  className='pcp red' >{item.price_change_percentage_24h.toFixed(2)}%</div></td>
            ):(
                <td><div  className='pcp green' >{item.price_change_percentage_24h}%</div></td>
             )
            }
    </tr>
  </tbody>
    </>
    ))}
</table>
</div>
        ) : (
            <h1 id='no'>Their no such coin Available</h1> 
        )
    }
          </div>
        ) }
        
       
    
</div>
</div>
</>
  )
}

export default Crypto;


// *****************************************************************************






























































































// import React, { useEffect, useState } from 'react'
// import withFilter from './withFilter';




// // let crpty =[]


// // const fil = () => {
// //     crp.map((item) => {
// //         crpty.push(item.name) 
// //         console.log(crpty);
// //      })
// // }


// const Crypto = (props) => {

//     const [upd, setUpd] = useState([]);
//     // const [filterL, setFilterL] = useState([]);
    
//     const callapi = () => {
//         fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//         .then(res => res.json())
//         .then((data) => {
//             setUpd(data); 
//         })
//     }

//     useEffect(() => {
//         callapi()
//     } , [])

//     useEffect(() => {
//         props.pullData(upd)
//         console.log("filter values  " + upd)
//     }, [upd])
    


//     return (
//         <>
            
//             {upd && upd.map((item) => (
//                 <div>{item.name}</div>
//             ))}
//         </>
//     )
// }
// // callapi();
// // fil();

// export default withFilter(Crypto);


