/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../../src/08-useReducer/TodoApp";
import { useTodos } from "../../../src/08-useReducer/useTodos";


jest.mock('../../../src/08-useReducer/useTodos');
describe('Pruebas en <TodoApp/>', () => { 
    

  

    test('Debe de mostrar el componente correctamente', () => { 

     useTodos.mockReturnValue({
            todos :[ {id:1,description:'Todo #1',done:false},
                     {id:2,description:'Todo #2', done:true}],
            total:2,
            totalHechos:1,
            onHandleNewTodo: jest.fn(),
            onHandleDeleteTodo: jest.fn(),
            onHandleToggleTodo: jest.fn()
        });



        render(<TodoApp/>);       
        screen.debug();

        expect (screen.getByText('Todo #1')).toBeTruthy();
        expect (screen.getByText('Todo #2')).toBeTruthy();
        expect (screen.getByRole('textbox')).toBeTruthy();

        //Sirve para ver que hay console.log(screen.getByRole('input'));
     })
 })