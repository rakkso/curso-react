import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    
    const todo = {
        id:1,
        description: 'Pieda del Alma',
        done: false,
    };


    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el Todo Pendiente de completar',() => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodoMock={onToggleTodoMock}
                onDeleteTodoMock={onDeleteTodoMock}
            />
        ); 

        const liElement = screen.getByRole('listitem');
        expect( liElement.className).toBe('list-group-item d-flex justify-content-between');


    })

    test('debe mostrar el Todo completado', () => { 

        //Primero pone el todo como completado y luego sabe como debe ser la renderización y la comprueba

        todo.done= true;
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodoMock={onToggleTodoMock}
                onDeleteTodoMock={onDeleteTodoMock}
            />
        ); 
        
        // Como no me encuentra el span he tenido que añadir al componente aria-label='span'
        const spanElement = screen.getByLabelText('span');
        expect (spanElement.className).toContain('text-decoration-line-through');


     })

     test('El span debe llamar al toogle cuando se hace click', () => { 

        render(
            <TodoItem
                todo={todo}

                borrar={onDeleteTodoMock}
                toggle={onToggleTodoMock}
            />
        ); 
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(1);
         
      })

      test('El botón debe de llamar al deleteTodo"', () => { 
        
        render(
            <TodoItem
                todo={todo}

                borrar={onDeleteTodoMock}
                toggle={onToggleTodoMock}
            />
        ); 

        const botonElement = screen.getByLabelText('button');
        fireEvent.click(botonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(1);



       })
    
 })