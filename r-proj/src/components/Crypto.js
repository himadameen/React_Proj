import React, { useEffect, useState } from 'react'
import '../App.css';

const Crypto = () => {

    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState('');

    const api = async() => {
        let url = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        let data = await url.json()
        setCoin(data);       
    }

    useEffect(() => {
        api();
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterCoins = coin.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
    ) 

  return (
    <>
    <div id='cryp'>
        <div id='cryp-coin'>
        <div id='input-box'>
            <input type='text' placeholder="Enter the Coin Name" onChange={handleChange} />
        </div>
         
        <br></br>
        <table>
         {filterCoins && filterCoins.map((item) => (
            <>
            <tbody>
            <div key={item.id}>
            <td><img  className='image' src={item.image}></img></td>
            <td><div  id='cname'>{item.name}</div></td>
            <td><div  id='cp'>${item.current_price}</div></td>
            <td><div  id='mcr'>{item.market_cap_rank}</div></td>
            {item.price_change_percentage_24h < 0 ? (
              <td><div  className='pcp red' >{item.price_change_percentage_24h.toFixed(2)}%</div></td>
            ):(
                <td><div  className='pcp green' >{item.price_change_percentage_24h.toFixed(2)}%</div></td>
             )
            }
            </div>
             </tbody>
        
            
            </>
           
         ))} 
          </table>
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


