import React, { useState } from 'react'

export const AddTodo = ({onNewTodo}) => {

    const [ inputValue, setInputValue] = useState('');

    const onInputChange= (event) => {

        setInputValue(event.target.value);
    }


    const onSubmit = ( event ) => {


        event.preventDefault();
        if (inputValue.trim().length <=1) return;
        setInputValue('');
        let todo = {
            id: new Date().getTime()*3,
            description: inputValue.trim(),
            done:false
        }
        onNewTodo(todo);
    }

  return (
    <form onSubmit={onSubmit}>
    <input
    type='text'
    value={inputValue}
    onChange={onInputChange}
    placeholder='¿Qué ha que hacer?'
    className='form-control'
    />
    <button
    type='submit'
    className='btn btn-outline-primary mt-1'
    > Agregar </button>
    </form> 

  )
}
