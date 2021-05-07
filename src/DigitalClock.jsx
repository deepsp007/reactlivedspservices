import React, { useState } from 'react'

const DigitalClock=()=>{

    let currentTime = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(currentTime);

    const UpdateCurrentTime=()=>{
        setCtime(new Date().toLocaleTimeString());
    }

    setInterval(UpdateCurrentTime,1);
    
    return(
        <>
            <h1 className="heading_style">{ctime}</h1>
        </>
    );
};

export default DigitalClock;