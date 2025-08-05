import React from 'react'
import { useState } from 'react';

const Counter=()=> {
    const[count,setCount] = useState(0);
    const plus =  ()=>{
        setCount(count+1);
    };
    const minus=()=>{
      if(count<=0){
        alert("cannot go further than zero")
      }
      else{
        setCount(count-1);
      }
    }
    const reset=()=>{
        setCount(0);
    }
  return (
    <>
    <h1>This show the count value</h1>
    <p id='counter'>{count}</p>
    <button onClick={plus}>+1</button>
    <button onClick={minus}>-1</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter
