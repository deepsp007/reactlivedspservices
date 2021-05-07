import React, { useState,useEffect } from 'react'
import { Route, Link ,Switch} from "react-router-dom";
import axios from 'axios'

const ComA=()=>{

    const [num,setNum] = useState(1);
    
    const [name,setName] = useState(0);
    
    const [moves,setMoves] = useState(0);

    useEffect(()=>{
        
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);

        }
        if(num!==0){
            getData();
        }else{

        }
        
    });
    return(<>
        <h1>You choose number {num}</h1>
        <h1>You choose name {name}</h1>
        <h1>It  has  {moves} moves</h1>
        <select onChange={(event)=>{
            setNum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
        </select>
       
    </>);
};

export default ComA;