import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
const Notes=(props)=>{


    const deleteNote=()=>{
        props.deleteItem(props.id);
    }

    return (<>
      <div className="note">
        <h1 style={{color:'black'}}>{props.title}</h1>
        <br/>
        <p style={{textAlign:'start'}}>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
             <DeleteOutlineIcon className="deleteIcon"/>
        </button>
        
      </div>
    </>);
}

export default Notes;