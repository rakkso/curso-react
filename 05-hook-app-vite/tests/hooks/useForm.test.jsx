/**
 * @jest-environment jsdom
 */
import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => { 
    
const initialForm = {
    name:'Fernando',
    email:'fernanado@google.com'
}    

test('debe de regresar los valores por defecto', () => { 
    
const {result} = renderHook(()=>useForm(initialForm));

//console.log(result.current);
expect(result.current).toEqual({
    name:initialForm.name,
    email: initialForm.email,
    formState: initialForm,
    onInputChange: expect.any( Function),
    resetFormulario: expect.any( Function),
})



})

describe('Montar el nombre del formulario', () => { 
    
    const {result} = renderHook(()=>useForm(initialForm));
    const { onInputChange } = result.current;
    const newValue = 'Juan';
    act(
        () => {
            onInputChange({target: {name:'name',value:newValue}})
            
        }
    );

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

})


describe('Debe resetear el formulario', () => { 
    
    const {result} = renderHook(()=>useForm(initialForm));
    const { onInputChange } = result.current;
    const { resetFormulario } = result.current;
    const newValue = 'Juan';
    act(
        () => {
            onInputChange({target: {name:'name',value:newValue}})
            resetFormulario();
            
        }
    );


    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

})

})