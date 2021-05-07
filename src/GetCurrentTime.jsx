import React, { useState } from 'react'
import './usestate.css'
const GetCurrentTime =()=>{

    let currentTime = new Date().toLocaleTimeString();

    let [currentTimeUpdated , setTimeCurrent] = useState(currentTime);
    
    const GetCurrTime=()=>{
        console.log("Clicked GetCurrTime");
        setTimeCurrent(new Date().toLocaleTimeString());
    }

    return(
        <>
            <div className="div_contaner">
                <h1>{currentTimeUpdated}</h1>
                <button className="button_click" onClick={GetCurrTime}>Click to get current time </button>
            </div>
        </>
    );

};

export default GetCurrentTime;