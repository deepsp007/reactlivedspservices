import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
const ListItems =(props)=>{

    return(<>
        <div className="todo_style">
           
             <button className="button_delete" onClick={()=>{
                 props.onSelect(props.id);
             }}> <DeleteIcon/> </button>
            <li>{props.item}</li>
    
        </div>
         
    </>);
};

export default ListItems;