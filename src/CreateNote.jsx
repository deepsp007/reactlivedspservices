import React, { useState } from 'react';
import Button  from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{

    const [note,setNote] = useState({
        title:"",
        content:""
    });

    const InputEvent=(inputEvent)=>{

        const {value,name} = inputEvent.target;
       
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        });
    
        console.log(note);
    }

    const addMyNote=()=>{
        if(note.title.length!==0 && note.content.length!==0){
            props.passNote(note);
            setNote(({
                title:"",
                content:""
            }));
        }else{
            alert("Please write title and content");
        }
        
        
    }

    return (<>
        <div className="main_note">
            <form>
                <input type="text" 
                value={note.title}
                name="title"
                onChange={InputEvent}
                placeholder="Title"
                 autoComplete="off"/>
                <textarea rows=''
                 column='' 
                 name="content"
                 value={note.content}
                  onChange={InputEvent}
                 placeholder="Write a note">
               
                 </textarea>
                <Button onClick={addMyNote}>
                    <AddIcon className="plus_sign"/>
                </Button>
            </form>
        </div>
    </>);
}

export default CreateNote;