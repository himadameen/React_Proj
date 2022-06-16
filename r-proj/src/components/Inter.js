import React, { useEffect, useState } from 'react'

const Inter = () => {

    const [list, setLists] = useState([]);
    const [search, setSearch] = useState('');

    const callapi = async() => {
          let url = await fetch('https://financialmodelingprep.com/api/v3/etf-holder/SPY?apikey=f0d1e755c0c7fcf5623497315b9a250d');
          let data = await url.json();
            setLists(data);
    }

    useEffect(() => {
        callapi();
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    let filter_r = list.filter(item => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))


  return (
    <>
    <h1>International <span  id='ma'>Stocks</span> Lists</h1>
    <div id='input-box1'>
    <input type='text' placeholder="Enter the Company name" onChange={handleChange}/>
    </div>
    
    
    {filter_r && filter_r.map((item, index) => (
        <>
        <div key={item.asset}>
        <div>{index+1}</div>
        <div>{item.name}</div>
        <div className='blue'>{item.sharesNumber}</div>
        {item.weightPercentage < 1 ? (
             <div className='green'>{item.weightPercentage}</div>
        ): (
            <div className='voilet'>{item.weightPercentage}</div>
        )}
        <div>{item.marketValue}</div>
        </div>
        </>
    ))}
    </>
  )
}

export default Inter
