import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const[count,setCount] = useState(0);
    const increase =  ()=>{
        setCount(count+1);
    };
    const decrease = ()=>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0);
    }
  return (
    <>
    <h1>This show the count value</h1>
    <p id='counter'>{count}</p>
    <button onClick={increase}>+1</button>
    <button onClick={decrease}>-1</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter
