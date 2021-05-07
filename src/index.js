import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import MyWebsite from './MyWebsite'

ReactDOM.render(<>
    <BrowserRouter>
        <MyWebsite />
    </BrowserRouter>
    </>
   ,document.getElementById('root1')
);