import React,{useState} from 'react'
import './todolistmaterial.css'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListItemMaterial from './ListItemMaterial'

const TodoListMaterial =()=>{

   const [item,setItem] = useState('');

   const [itemArray,setItemArray] = useState([]);

   const onInputChange=(eventOnChangeInput)=>{
        setItem(eventOnChangeInput.target.value);
   }
   const addItemToList=()=>{
    if(item.length!==0){
        setItemArray((oldItemArray)=>{
          
                return [...oldItemArray,item];
        });
        setItem("");
    }else{
        alert("Please enter item name");
    }
    
   }


    return (
        <>
           <div className="main_div">
                <div className="center_div">
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Enter item name" onChange={onInputChange} value={item}/>
                    <Button onClick={addItemToList} color="primary" >
                        <AddIcon   />
                    </Button>
                    <br/>
                    <ol>
                           {itemArray.map((newItemAray,index)=>{
                            return <ListItemMaterial item={newItemAray} key={index} id={index}/>
                           })}
                        
                    </ol>
                </div>

           </div>
        </>
    );
};

export default TodoListMaterial;
