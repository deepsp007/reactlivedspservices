import React, { useState } from 'react'

const Search=(props)=>{

    const [img ,setImg] = useState('');

    const InputEventChange=(event)=>{
        setImg(event.target.value);
    }
    return (<>
        <div className="searchbar">
            <input type="text" placeholder="Search Anything" onChange={InputEventChange}/>
            <br/>
            <img src={`https://source.unsplash.com/600x300/?${img}`} alt="search"/>
        </div>
    </>);
}

export default Search;