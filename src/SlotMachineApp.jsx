import React from 'react'

const SlotM = (props)=>{
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if((x===y)&&(y===z)){
        return (
            <>
                <div>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is matching</h1>
                    <hr/>
                </div>
            </>
        );
    }else{
        return (
            <>
                <div>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is not matching</h1>
                    <hr/>
                </div>
            </>
        );
    }
}

const SlotMachineApp =()=>{
    return(
        <>
            <div className="cards">

           
            <h1>🎰 Welcome to <span style={{fontWeight:'bold'}}> SLOT MACHINE GAME</span>🎰</h1>

            <SlotM x='😄' y='😄' z='😄'/>
            <SlotM x='😄' y='😄' z='😆'/>
            <SlotM x='😄' y='😄' z='🎅'/>
            </div>
        </>
    );
}

export default SlotMachineApp;