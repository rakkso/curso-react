import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
//import { FromWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
