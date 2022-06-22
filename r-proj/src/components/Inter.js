import React, { useEffect, useState } from 'react'

const Inter = () => {

    const [list, setLists] = useState([]);
    // const values = { input: '' }
    const [search, setSearch] = useState('');

    // const [initial, setInitial] = useState(values);
    const [error, SetError] = useState({});


    //Calling Api// 

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
        const err = validateForm(e.target.value);
        SetError(err);
    }

    let filter_r = list.filter(item => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))

    // Input Error Handling //

    const validateForm = () => {
        let err = {};
        if(!search.match(/[A-Za-z]/)) {
            err.search = "Please, Enter non - Digit Character"
        }
        // else;
        return err;
    }

    return (
        <>
            <div id='inter-bg'>
                <div id='inter_hd'>International <span id='ma'>Stocks</span> Lists</div>
                <div id='input-box1'>
                    <input type='text' placeholder="Enter the Company name" onChange={handleChange} value={search}/>
                </div>
                <div className='err'>{error.search}</div>
                
                {filter_r.length > 0 ? (
                    <div class='container'>
                    <table class="table table-striped" id='tab_inter'>
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
                                        <td ><div className='bd'>$ {item.marketValue.toFixed(2)}</div></td>

                                    </tr>
                                </tbody>
                            ))}
                    </table>
                    </div>
                ) : (
                    <h1 id='no'>Their is No Such Company Available</h1>
                )
                }
            </div>
        </>
    )
}

export default Inter
