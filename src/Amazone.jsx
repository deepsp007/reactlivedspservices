import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'
const Amazone =()=>{
    return(
                   
        <Cards 
               key={Sdata[3].id}
               imgscr={Sdata[3].imgscr} 
               title={Sdata[3].title}
               sname = {Sdata[3].sname}
               links={Sdata[3].links}  
                   />);
}

export default Amazone;