import React, { useContext, useEffect, useState } from 'react'
import ComC from './ComC'
import  {FirstName,LastName,Gali} from './ContextHook'

const ComB=()=>{

    const [num ,setNum] = useState(0);
    
    const [nums ,setNums] = useState(0);
    const fName = useContext(FirstName);

    const lname = useContext(LastName);

    const gali = useContext(Gali);

    useEffect(()=>{
       document.title=`You clicked me ${num}`;
    },[num]);

    return(<>
       
       <h1>My name is {fName} {lname} {gali} {num} {nums}</h1>
       <button onClick={()=>{
           setNum(num+1);
       }}>Click me</button>

        <button onClick={()=>{
           setNums(nums+1);
       }}>Click me</button>
    </>);
};

export default ComB;