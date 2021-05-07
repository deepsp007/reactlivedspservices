import React from 'react'
import CalcView from './CalcView'
let currentTime = new Date();
//let currentTime = new Date(2020,5,10,14);

const currTimeForShow = new Date().toLocaleTimeString();
currentTime = currentTime.getHours();

const cssStyle = {
    
};
let greetings='';
if(currentTime>=1 && currentTime<12){
    greetings="Good Morning!!!";
    cssStyle.color ='green'
}else if(currentTime>=12 && currentTime<19){
    greetings="Good Afternoon!!!"
    cssStyle.color ='orange'
}else{
    greetings="Good Night!!!"
    cssStyle.color ='black'

}
function MyApp(){
    return(
        <div>
            <h1>Hello Sir ,  <span style={cssStyle}>{greetings}</span> time is : {currTimeForShow}</h1>
            <CalcView/>
        </div>
    );
}

export default MyApp;