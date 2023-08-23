import React from 'react';
import ReactDOM  from 'react-dom/client';
import {App} from './HelloWorlApp'
import { FirstApp } from './FirstApp';


import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App/>
    <FirstApp titulo="parametro" />
    </React.StrictMode>
)