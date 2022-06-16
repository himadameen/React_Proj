import React, { useEffect, useState } from 'react'



const Valuetop = () => {

    const [initial, setInitial] = useState([]);

    const call = async() => {
        let url = await fetch('https://www1.nseindia.com/live_market/dynaContent/live_analysis/most_active/allTopValue1.json');
            let data = await url.json();
            setInitial(data);
    }

    useEffect(() => {
        call();
    }, [])

  return (
    <>
        <h2>Top 10 all time Valuable Stocks in India</h2>

        {initial && initial.map((item) => (
            <>
            <div key={item.symbol}>
        <div>{item.symbol}</div>
        <div>{item.ltp}</div>
        <div>{item.netPrice}</div>
        {item.netPrice < 0 ? (
            <div className='red'>{item.netPrice}</div>
        ): (
            <div className='green'>{item.netPrice}</div>
        )}
        <div>{item.turnoverInLakhs.toFixed(4)}</div>
        <div>{item.tradedQuantity.toFixed(2)}</div>
        </div>
        </>
        ))}
    </>
    
  )
}

export default Valuetop;