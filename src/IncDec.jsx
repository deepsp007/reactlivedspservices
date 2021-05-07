import React, { useState } from 'react'
import './incdec.css'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'

const IncDec =()=>{

    const [num,setNum] = useState(0);

    const Inc=()=>{
        setNum(num+1);
    }

    const Dec=()=>{
        if(num===0){
            alert('Number is zero cant be go down');
        }else{
            setNum(num-1);
        }
        
    }
    return(<>
        <div className="main_div">
            <div className="center_div">
                <h1> {num} </h1>
                <div className="buttons_div">
                    <Tooltip title="ADD">
                        <Button onClick={Inc} className="btn_green"><AddIcon/></Button>
                    </Tooltip>
                    <Tooltip title="DELETE">
                        <Button onClick={Dec} className="btn_red"><DeleteIcon/></Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    </>);
};

export default IncDec;