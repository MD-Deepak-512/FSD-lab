import React from 'react'
import { useState } from 'react'
function Name() {
    const[username,setusername] = useState('');
    const[error,setError] = useState('');
    const updateName = (e)=>{
        setusername(e.target.value);
    }
    const validateName = () => {
    if (username===''||username===null) {
      setError('Name should not be blank');
    } else if (username.length < 4) {
      setError('Username should be more than 4 characters');
    } else if (username.length > 8) {
      setError('Username should be less than 8 characters');
    } else {
      setError('Valid username');
    }
  };
  return (
    <>
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={updateName}
      />
      <span style={{color:'red'}}>{error}</span>
      <br />
      <button onClick={validateName}>Validate Name</button>
    </div>
    </>
  )
}

export default Name;