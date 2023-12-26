import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
//import { MemoHook } from './06-memo/MemoHook'
import { CallBackHook } from './06-memo/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
//import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import Layout from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memo/Memorize'
//import { FromWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'

//import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
