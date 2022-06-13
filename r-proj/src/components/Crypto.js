// import React, { useEffect, useState } from 'react'
// import '../App.css';

// const Crypto = () => {

//     const [coin, setCoin] = useState([]);
//     const [search, setSearch] = useState('');

//     const api = async() => {
//         let url = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//         let data = await url.json()
//         setCoin(data);       
//     }

//     useEffect(() => {
//         api();
//     }, [])

//     const handleChange = (e) => {
//         setSearch(e.target.value)
//     }

//     const filterCoins = coin.filter(item => 
//         item.name.toLowerCase().includes(search.toLowerCase())
//     ) 

//   return (
//     <>
//         <input type='text' placeholder="Enter the Name" onChange={handleChange} /> 
//         <br></br>
//          {filterCoins && filterCoins.map((item) => (
//             <>
//             <div key={item.id}>
//             <img  className='image' src={item.image}></img>
//             <div  id='cname'>{item.name}</div>
//             <div  id='cp'>{item.current_price}</div>
//             <div  id='mcr'>{item.market_cap_rank}</div>
//             <div  id='pcp'>{item.price_change_percentage_24h.toFixed(2)}</div>
//             {item.price_change_percentage_24h < 0 ? (
//                 <div  className='pcp red' >{item.price_change_percentage_24h}%</div>
//             ):(
//                 <div  className='pcp green' >{item.price_change_percentage_24h}%</div>
//              )
//             }
//             {/* {price_change_percentage_24h<0 ? (
//                         <p className="coin-percent red">{price_change_percentage_24h.toFixed(2)}%</p>
//                     ):(
//                         <p className="coin-percent green">{price_change_percentage_24h.toFixed(2)}%</p>
//                     )
//                 } */}
//             </div>
//             </>
//          ))}
        
//     </>
//   )
// }

// export default Crypto;



// *****************************************************************************





import React, { useEffect, useState } from 'react'
import withFilter from './withFilter';




// let crpty =[]


// const fil = () => {
//     crp.map((item) => {
//         crpty.push(item.name) 
//         console.log(crpty);
//      })
// }


const Crypto = (props) => {

    const [upd, setUpd] = useState([]);

    
    const callapi = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res => res.json())
        .then((data) => {
            setUpd(data); 
            // console.log(crp)
        })
    }

    useEffect(() => {
        callapi()
    } , [])

    useEffect(() => {
        props.pullData(upd)
    }, [upd])
    
    return (
        <>
            
            {props.list && props.list.map((item) => (
                <div>{item.name}</div>
            ))}
        </>
    )
}
// callapi();
// fil();

export default withFilter(Crypto);


