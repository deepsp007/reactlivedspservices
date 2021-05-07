import React from 'react'
import add from './Calculator';
import {mul,divide,sub} from './Calculator';
function CalcView(){
    return (
        <>
            <ul>
                <li>Sum is {add(10,4)}</li>
                <li>Multiply is {mul(10,4)}</li>
                <li>div is {divide(10,4)}</li>
                <li>Sub is {sub(10,4)}</li>
            </ul>
        </>
    );
}

export default CalcView;