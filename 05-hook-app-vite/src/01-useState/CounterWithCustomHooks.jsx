import React from 'react'
import {useCounter} from '../hooks/useCounter'


export const CounterWithCustomHooks = () => {

    const {counter,increment,reset,decrement} = useCounter(5);

  return (
    <>
    <h1>Counter with Hook: {counter}</h1>
    
    <button className='btn btn-primary' onClick={() => increment()}>+1</button>
    <button className='btn btn-primary' onClick={() => reset()} >reset</button>
    <button className='btn btn-primary' onClick={() => decrement()}>-1</button>
    </>
  )
}
