import { useState } from 'react'




export const AddCategory = ({functionAddCategory}) => {

    const [ inputValue, setInputValue] = useState('nuevo valor');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
        //console.log(event)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit:",functionAddCategory);
        //Evita enviar vacios o con tamaño 1.
        if (inputValue.trim().length <= 1) return;

        //no funciona da error GifExpertApp.jsx:45 Uncaught TypeError: categories.map is not a function
        //functionAddCategory(...inputValue); 
        
        
        functionAddCategory((categories)=> [inputValue,...categories])
        console.log(inputValue)
    
    }

  return (
    <form onSubmit={ onSubmit}>
    <input
    type="text"
    value={inputValue}
    onChange= {onInputChange}/>
    </form>
  )
}
