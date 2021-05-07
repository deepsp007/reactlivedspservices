import React, { createContext } from 'react'
import ComA from './ComA'

const FirstName = createContext();
const LastName = createContext();
const Gali = createContext();

const ContextHook=()=>{

    return(<>
        <FirstName.Provider value={"Banty"}>
            <LastName.Provider value={"Sharma"}>
                <Gali.Provider value={"C... he"}>
                    <ComA/>
                </Gali.Provider>
                
            </LastName.Provider> 
        </FirstName.Provider>
        
    </>);
};

export default ContextHook;
export {FirstName,LastName,Gali};