import React, { useState } from 'react';
import ListItems from './ListItems';
import './todolist.css'

const TodoList =()=>{

    const [inputTextChanges,setInputTextChange] = useState("");
    const [arrayToDoList,setArrayToDoList] = useState([]);

    const inputChanges=(eventInputChange)=>{
        setInputTextChange(eventInputChange.target.value);
    }
    const addItems=()=>{
        if(inputTextChanges.length!==0){
            setArrayToDoList((oldArrayToDoList)=>{
                return[...oldArrayToDoList,inputTextChanges];
            });
        }else{
            alert("Please write some item name 😕");
        }
        setInputTextChange("");
    }
    const deleteSelectedItem=(id)=>{
        console.log("Deleted"+id);
        setArrayToDoList((oldArrayItems)=>{
            return oldArrayItems.filter((newArryAfterDeleted,index)=>{
                    return index!==id;
            });
        });
    }
    return(<>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <input type="text" onChange={inputChanges} value={inputTextChanges}/>
                <button onClick={addItems}>+</button>
                <ol>
                    {
                        arrayToDoList.map((newArrayListTodo,index)=>{
                           return <ListItems 
                               item = {newArrayListTodo}
                               id = {index}
                               key = {index}
                               onSelect = {deleteSelectedItem}
                           />
                        })
                    }
                </ol>
            </div>
        </div>
    </>);
};

export default TodoList;