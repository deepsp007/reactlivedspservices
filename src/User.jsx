import React from 'react'
import { useHistory, useLocation,useParams } from 'react-router-dom';

const User=({match})=>{

    const {fname,lname} = useParams(); 
    const history = useHistory();
    const location = useLocation();
    console.log(location);
    console.log("History"+history)
    return (<>
        <h1 style={{textAlign:'center'}}>Hello !! I an your User {fname} {lname}</h1>
        <h1 style={{textAlign:'center'}}>Your current location is : {location.pathname}</h1>
        {location.pathname==='/user/Deepak/Singh' ? <button style={{textAlign:'center'} } onClick={()=>{
           // history.goBack();
            history.push('/')
        }}>Back</button>:null}
    </>);
}

export default User;