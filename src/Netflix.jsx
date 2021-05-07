import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'
const Netflix =()=>{
    return(
                   
        <Cards 
               key={Sdata[0].id}
               imgscr={Sdata[0].imgscr} 
               title={Sdata[0].title}
               sname = {Sdata[0].sname}
               links={Sdata[0].links}  
                   />);
}

export default Netflix;