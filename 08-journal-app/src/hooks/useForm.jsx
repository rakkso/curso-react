import React, { useEffect, useMemo, useState } from 'react'

export const useForm = ( initialForm={} ,formValidations={} ) => {



      const [formState, setFormState] = useState(initialForm)
      const [ formValidation  , setFormValidation ] =useState({})

      useEffect(() => { createValidators(); }, [formState])
      
    
      const {username, email} = formState;
    
      const  onInputChange = ( {target}) =>{
    
        const {name,value} = target;
        //console.log({name, value});
    
        setFormState({
            ...formState, // todos los campos que hubiese
            [name]:value, // funciona porque el target nos devuelve los campos name y value del form que han cambiado
        })

      }
 
      const isFormValid = useMemo ( () => {
        for (const formValue of Object.keys( formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation])


      const resetFormulario = ( ) => {
       
       
        console.log(initialForm);
        setFormState(initialForm)
    
    
    
 
      }


      const createValidators =() => {
        const formCheckedValues = {};
    
        for (const formField of Object.keys (formValidations)) {
           // console.log("createValidator",formField)
            const [fn, errorMessage] =formValidations[formField];
            //Crea en el formChecked una entrada con nombre, nombre del campo +Valid con el 
            //resultado de la ejecución de la función que nos han pasado.
            formCheckedValues[`${ formField }Valid`]= fn(formState[formField]) ? null: errorMessage;
        }
        console.log("hola",formCheckedValues);
        setFormValidation (formCheckedValues);

        console.log("hola formState",formState);
    }

      return {
    ...formState,
    formState,
    onInputChange,
    resetFormulario,
    ...formValidation,
    isFormValid
  }
}
