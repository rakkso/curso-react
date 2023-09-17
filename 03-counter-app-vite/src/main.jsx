import React from 'react';
import ReactDOM  from 'react-dom/client';
import {App} from './HelloWorlApp'
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import "./styles.css";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App/>
    <FirstApp titulo={1+1} />
    {
/* <CounterApp valor={2} /> */
    }
   
    </React.StrictMode>
)