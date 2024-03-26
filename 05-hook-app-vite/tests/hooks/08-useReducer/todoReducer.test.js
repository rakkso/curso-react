import { act } from "@testing-library/react";
import { todoReducer } from "../../../src/08-useReducer/todoReducer"

describe('Pruebas del todoReducer', () => { 
    
const initialState = [{
    id:1,
    description: 'Demo todo',
    done: false,
}]    


test('debe regresar el estado inicial', () => { 
    
    const newState = todoReducer(initialState,{});

    //hace un toBe, porque como le pasa un objeto este viaja por referencia, con lo cual es exacto, el mismo trozo de memoria, no es una copia.
    expect(newState).toBe(initialState);
    
})

test('Debe de añadir un objeto', () => { 
    
    const action = {
        type:  '[TODO] Add Todo',
        payload: {
            id:2,
            description: 'Nuevo todo #2',
            done: false
        }};

        const newState = todoReducer(initialState, action);
        expect( newState.length).toBe(2);
        expect( newState).toContain(action.payload);

    
 })


 test('Debe eliminiar un elmento', () => { 
    
    const action = {
        type:'[TODO] Delete Todo',
        payload: 1
    };

    const newState = todoReducer(initialState,action);
    expect(newState.length).toBe(0);

  })

 test('Debe moficiar un elemento', () => { 
    
    const action ={
        type: '[TODO] Toggle Todo',
        payload:1
    };

    const newState = todoReducer(initialState,action);
    expect(newState[0].done).toBeTruthy();

 })
})