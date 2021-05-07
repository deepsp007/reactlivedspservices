import React, { useState } from 'react'
import './usestate.css'
const Form =()=>{

    const [formObject,setFormObject] = useState({
        fname :'',
        lname:'',
        email:'',
        mNumber:''
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        //const value = event.target.value;
        //const name = event.target.name;

        const {value , name} = event.target;
        setFormObject((preveousValues)=>{
            console.log(preveousValues);
            console.log(value+":"+name);
            return{
                ...preveousValues,
                [name]:value 
            }

            // if(name==='fname'){
            //     return {
            //         fname:value,
            //         lname:preveousValues.lname,
            //         email:preveousValues.email,
            //         mNumber:preveousValues.mNumber
            //     };
            // }else if(name ==='lname'){
            //     return{
            //         fname:preveousValues.fname,
            //         lname:value,
            //         email:preveousValues.email,
            //         mNumber:preveousValues.mNumber
            //     };
            // }else if (name ==='email'){
            //     return{
            //         fname:preveousValues.fname,
            //         lname:preveousValues.lname,
            //         email:value,
            //         mNumber:preveousValues.mNumber
            //     };
            // }else{
            //     return{
            //         fname:preveousValues.fname,
            //         lname:preveousValues.lname,
            //         email:preveousValues.email,
            //         mNumber:value
            //     };
            // }
        })
    }

    const onSubmits=(event)=>{
        event.preventDefault();
        console.log(event.target.value);
        alert("form submitted");
    }
   
    return(<>
    <div >
        <form onSubmit={onSubmits}>
            <div>
                <h1>Hello !!! {formObject.fname} {formObject.lname}</h1>
                <h3>{formObject.email}</h3>
                <h3>{formObject.mNumber}</h3>
                <input 
                type="text" 
                placeholder="Enter First Name"  
                onChange={inputEvent} 
                name='fname'
                value={formObject.fname}
               />
                <br/>
                <input 
                type="text" 
                placeholder="Enter Last Name"  
                onChange={inputEvent} 
                name='lname'
                value={formObject.lname}
                />
                <br/>
                <input 
                type="text" 
                placeholder="Enter email"  
                onChange={inputEvent} 
                name='email'
                value={formObject.email}
                />
                <br/>
                <input 
                type="text" 
                placeholder="Enter mobile number"  
                onChange={inputEvent} 
                name='mNumber'
                value={formObject.mNumber}
                />
                <button type="submit">Submit Me 👍</button>
            </div>
        </form>
    </div>
    </>);
}

export default Form;