import React, { useEffect, useState } from 'react'

const Stock = () => {
    const [stock, setStock] = useState([])
    const [search, setSearch] = useState('')


    const api = async() => {
        let url = await fetch('')
        let data = await url.json()
        setStock(data);
    }

    useEffect(() => {
        api()
    }, [])

  return (
    <div>Stock</div>
  )
}

export default Stock