import React, { useState } from 'react'

export const useForm = ( initialForm={} ) => {



      const [formState, setFormState] = useState(initialForm)
    
      const {username, email} = formState;
    
      const  onInputChange = ( {target}) =>{
    
        const {name,value} = target;
        //console.log({name, value});
    
        setFormState({
            ...formState, // todos los campos que hubiese
            [name]:value, // funciona porque el target nos devuelve los campos name y value del form que han cambiado
        })
    
    
    
      }
  return {
    ...formState,
    formState,
    onInputChange,
  }
}
