import React, { useState } from 'react'

const Login = () => {

    const [set, update] = useState({
        user : '',
        pw : ''
    })

    const handleNames = (e) => {
        update(e.target.value);
    }


    const handleSubmit = () => {
        
    }


  return (
    <>
    <h1>Login</h1>
    <div className='login'>
        <input type="text" placeholder='Please Enter UserName' onChange={handleNames} />
        <br></br>
        <input type="text" placeholder='Please Enter Password' onChange={handleNames} />
        <br></br>
        <button onClick={handleSubmit}>LOGIN</button>
    </div>
    </>
  )
}

export default Login