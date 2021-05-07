import React from 'react'
import ComonPage from './ComonPage';
import img2 from './images/img2.svg'

const Home=()=>{

    return (<>
        <ComonPage name='Grow your business with' imgsrc={img2} visit="/services" btname="Get Started"/>
    </>);
}

export default Home;