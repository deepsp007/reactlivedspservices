import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Services from './Services';
import {Redirect, Route, Switch} from 'react-router-dom'
import Contact from './Contact';
import Navbar from './Navbar';
import './mywebsite.css';
import Footer from './Footer'
const MyWebsite =()=>{

    return(<>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/contact' component={Contact}/>
            <Redirect to="/"/>
        </Switch>
        <Footer />
    </>);
};

export default MyWebsite;