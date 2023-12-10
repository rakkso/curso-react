import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Smalli } from './Smalli';


export const Memorize = () => {

    const {counter,increment} = useCounter(10);
    const [show, setshow] = useState(true)
  return (
    <>

        <h1>Counter: <Smalli value={counter}/></h1>
        <hr/>
        <button
            className='btn btn-primary'
            onClick={()=>increment()}>+1</button>
        <button
            className='btn btn-outline-primary'
            onClick={()=>setshow(!show)}>Show/hide {JSON.stringify(show)} </button>

    </>
  )   
}
