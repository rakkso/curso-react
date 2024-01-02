import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const AddTodo = ({onNewTodo}) => {



    const { description, onInputChange, resetFormulario} = useForm( {
      description:''
    })

    /*const [ inputValue, setInputValue] = useState('');

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
    }*/

    const onFormSubmit = ( event ) => {


      event.preventDefault();
      if (description.trim().length <=1) return;
      
      let todo = {
          id: new Date().getTime()*3,
          description: description.trim(),
          done:false
      }
      onNewTodo(todo);
      resetFormulario(); // para que borre la caja de texto
  }

  return (
    <form onSubmit={onFormSubmit}>
    <input
    type='text'
    value={description}
    onChange={onInputChange}
    placeholder='¿Qué ha que hacer?'
    className='form-control'
    name="description"
    />
    <button
    type='submit'
    className='btn btn-outline-primary mt-1'
    > Agregar </button>
    </form> 

  )
}
