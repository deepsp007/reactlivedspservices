import React from 'react'
import  {FirstName,LastName,Gali} from './ContextHook'
const ComC=()=>{

    return(<>
        <FirstName.Consumer>
            {(fname)=>{
                return (
                    <LastName.Consumer>
                        {(lastName)=>{
                            return (
                                <Gali.Consumer>
                                    {
                                        (gali)=>{
                                           return <h1>My name is {fname} {lastName} {gali}</h1>
                                        }
                                    }
                                </Gali.Consumer>
                            )
                        }}
                    </LastName.Consumer>
                )  
            }}
        </FirstName.Consumer>
        
    </>);
};

export default ComC;