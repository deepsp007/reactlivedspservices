import React, { useState } from 'react'
import './usestate.css'


const UseState =()=>{

    const [count,setCount] = useState(0);

    const IncNum=()=>{
        setCount(count+1);
    }
    return (
        <>
        <div className="div_contaner">
            <h1>{count}</h1>
            <button className="button_click" onClick={IncNum}> Click Me</button>
        </div>
           
        </>
    );
};

export default UseState;