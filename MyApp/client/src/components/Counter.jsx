import React from 'react'
import './Counter.css'
import {useState,useEffect} from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
    const [message, setMessage] = useState("");
    useEffect(()=>{
        setMessage(`Updated Count: ${count}`)
    }, [count]);
    const increase=()=>{
         console.log("Count=",count+1);
         setCount(count+1);
    }
    const decrease=()=>{
        if(count>0){
         console.log("Count=",count-1);
         setCount(count-1);
        }
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div className='counter'>
            <button  className="dec" onClick={decrease}>-</button>
            <div className='id'>
              {count}
            </div>
            <button className="inc" onClick={increase}>+</button>
        </div>
        <h2>{message}</h2>
    </div>
  )
}

export default Counter
