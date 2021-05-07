import React from 'react'
import logo from './logo.svg'

const Header=()=>{

    return (<>
        <div className="header">
            <img src={logo} alt="logo" width="70"/>
            <h1>My Keep</h1>
        </div>
    </>);
}

export default Header;