import React, { useState } from 'react'

const Counter = () => {

    const [count,setcount] =useState(0);
  
    
   
  return (
    <div>
      <h2 style={count%2===0 ? {color:"green"}:{color:"red"}}>counter={count}</h2> 
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <button onClick={()=>setcount(count*2)}>Double</button>
   </div>
  )
}


export default Counter