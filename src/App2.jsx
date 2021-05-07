import React from 'react'
import Amazone from './Amazone';
import Cards from './Cards'
import DigitalClock from './DigitalClock';
import GetCurrentTime from './GetCurrentTime';
import Netflix from './Netflix';
import Sdata from './Sdata'
import SlotMachineApp from './SlotMachineApp';
import UseState from './UseState';

const favSeries = "netflix";

const FavSeries=()=>{
    if(favSeries==="netflix"){
      return  <Netflix/>;
    
    }else{
       return <Amazone/>;
    }
}

const App2=() =>{

    return(
    <>
        <h1 className="heading_style">List of top five Series to watch</h1>
        {Sdata.map((values,index)=>{
            console.log("index:"+index)
            return(
               
             <Cards 
                    key={values.id}
                    imgscr={values.imgscr} 
                    title={values.title}
                    sname = {values.sname}
                    links={values.links}  
                        />);

            
        })}
        
        <SlotMachineApp />
        <UseState/>
        <GetCurrentTime/>
        <DigitalClock/>
    </>
    )
}

export default App2;