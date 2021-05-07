
import React from 'react'
import {NavLink} from "react-router-dom";
const Menu=()=>{

    return (<>
      
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/">AboutUs</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">ContactUs</NavLink>
            <NavLink exact activeClassName="active_class" to="/service">Service</NavLink>
            <NavLink exact activeClassName="active_class" to="/search">Search anything</NavLink>
            <NavLink exact activeClassName="active_class" to="/user/Deepak/Singh">User</NavLink>
      
        </div>
    </>);
}

export default Menu;