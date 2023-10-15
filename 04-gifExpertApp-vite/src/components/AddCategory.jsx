import { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue] = useState('nuevo valor');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        console.log("AddCatgory",event.target.value);
        //console.log(event)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        //console.log("onSubmit:",functionAddCategory);
        //Evita enviar vacios o con tamaño 1.
        if (inputValue.trim().length <= 1) return;

        //no funciona da error GifExpertApp.jsx:45 Uncaught TypeError: categories.map is not a function
        //functionAddCategory(...inputValue); 
        
        setInputValue('');
        //functionAddCategory((categories)=> [inputValue,...categories])
        onNewCategory(inputValue.trim());
        console.log(inputValue)
    
    }

  return (
    <form onSubmit={ onSubmit} aria-label='form'> 
    <input
    type="text"
    value={inputValue}
    onChange= {onInputChange}/>
    </form>
  )
}

AddCategory.protoTypes ={
  onNewCategory: PropTypes.func.isRequired,

}