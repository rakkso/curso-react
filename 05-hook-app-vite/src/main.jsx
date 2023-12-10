import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
//import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import Layout from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memo/Memorize'
//import { FromWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>,
)
