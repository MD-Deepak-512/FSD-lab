import React from 'react'
import { useState } from 'react'

function Hook1() {
    const[user1,user2] = useState("default");
    let val = true;
    const handle = () =>{
        if(val){
            user2("Not changed")
            val = !val;
        }
        else{
            user2("changed")
            val = !val;
        }
        
    }
  return (
    <>
     <h1>UseState</h1>
     <button onClick={handle}>
        click me
     </button>
     <p>{user1}</p>
    
    </>
   
  )
}

export default Hook1