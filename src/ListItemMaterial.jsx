import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const ListItemMaterial =(props)=>{   
    
    const [isChecked,setIsChecked] = useState(false);


    const onChecked=()=>{
        setIsChecked(true);
    }
    return (
        <>
            <div className="todo_style" >
                <Button onClick={onChecked} color="primary" className="button_delete">
                    <DeleteIcon />
                </Button>
                <span >
                    <li style={{textDecoration: isChecked?'line-through':""}}>{props.item}</li>
                </span>
                
            </div>
        </>
    );

};

export default ListItemMaterial;