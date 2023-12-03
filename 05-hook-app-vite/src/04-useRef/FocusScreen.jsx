import React from 'react'
import { useRef } from 'react'


export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick =() => {

        inputRef.current.select();
    }
  return (


    <>
    <h1>Focus Screen</h1>
    
    <input
        
        type="text"
        placeholder='Ingrese su nombre1'
        className='form-control'/>
<input
        ref={inputRef}   
        type="text"
        placeholder='Ingrese su nombre2'
        className='form-control'/>

    <button className='btn btn-primary mt-2'
        onClick={onClick}>Set Focus </button>
   </>
    
  )
}
