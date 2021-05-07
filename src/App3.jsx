import React from 'react'
import { Route ,Switch} from "react-router-dom";

import About from './About'
import Contact from './Contact'
import Service from './Service'
import User from './User'
import PageNotFound from './PageNotFound'
import Menu from './Menu';
import './todolist.css'
import Search from './Search'
const App3=()=>{

    return (<>
    
        <Menu/>
        <Switch>
            <Route exact path='/' component={()=><About name="About me"/>}/>
            <Route exact path='/contact' component={Contact}/>
            <Route path='/service' render={()=><Service name="Service me"/>}/>
            <Route path='/search' render={()=><Search />}/>
            <Route path='/user/:fname/:lname' render={()=><User name="User me"/>}/>
            <Route component={PageNotFound}/>

        </Switch>

    </>);
}

export default App3;