import React from 'react'
import ComonPage from './ComonPage';
import img1 from './images/img1.svg'


const About = () => {

    return (<>
        <ComonPage name='Welcome to About page' imgsrc={img1} visit="/contact" btname="Contact Now" />
    </>);
}

export default About;