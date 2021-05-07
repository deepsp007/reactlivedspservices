import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'
import './keep.css'

const Keep=()=>{

    const [addItem,setAddItems] = useState([]);

    const addNote=(note)=>{
   
        setAddItems((prevData)=>{
            return [...prevData,note];
        });
        console.log(note);
    }

    const onDelete=(id)=>{
        setAddItems((fullArray)=>
            fullArray.filter((cuurData,index)=>{
                return index!==id;
            })
        );
    };

    return (<>
        <Header />
        <CreateNote passNote={addNote} />
       
        {
            addItem.map((myNotesFinal , index)=>{
                return (<>
                    <Notes
                 key={index}
                 id={index}
                 title={myNotesFinal.title}
                 content={myNotesFinal.content}
                 deleteItem = {onDelete}                
                /> 
                </>);
                })
        }
        <Footer />
    </>);
};

export default Keep;