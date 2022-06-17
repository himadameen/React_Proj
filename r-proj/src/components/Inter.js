import React, { useEffect, useState } from 'react'

const Inter = () => {

    const [list, setLists] = useState([]);
    const [search, setSearch] = useState('');

    const callapi = async () => {
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
            <div id='inter-bg'>
                <div id='inter_hd'>International <span id='ma'>Stocks</span> Lists</div>
                <div id='input-box1'>
                    <input type='text' placeholder="Enter the Company name" onChange={handleChange} />
                </div>

                {filter_r.length > 0 ? (
                    <table class="table table-striped container" id='tab_inter'>
                        <thead>
                            <tr>
                                <th scope="col" className='thd'>#</th>
                                <th scope="col" className='thd'>Name</th>
                                <th scope="col" className='thd'>Share Number</th>
                                <th scope="col" className='thd'>Market %</th>
                                <th scope="col" className='thd'>Market Value</th>
                            </tr>
                        </thead>
                        {
                            filter_r && filter_r.map((item, index) => (
                                <tbody>
                                    <tr key={item.asset}>
                                        <th scope="row"><div className='thd'>{index + 1}</div></th>
                                        <td ><div className='bd'>{item.name}</div></td>
                                        <td><div className='blue'>{item.sharesNumber}</div></td>
                                        <td>{item.weightPercentage < 1 ? (
                                            <div className='green'>{item.weightPercentage}%</div>
                                        ) : (
                                            <div className='voilet'>{item.weightPercentage}%</div>
                                        )}</td>
                                        <td ><div className='bd'>{item.marketValue.toFixed(2)}</div></td>

                                    </tr>
                                </tbody>
                            ))}
                    </table>
                ) : (
                    <h1 id='no'>Their is No Such Company Available</h1>
                )
                }
            </div>
        </>
    )
}

export default Inter
