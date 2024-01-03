import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ( {todoLista, onDeleteTodo, onToggleTodo} ) => {
  return (
    
    <>
        <ul className='list-group'>
              {
                todoLista.map( todo => (
                   //Nuevo componente todoItem 
                  //<li className='list-group-item d-flex justify-content-between'>
                  //<span className='align-self-center'>Item1</span>
                  //<button className='btn btn-danger'>Borrar</button>
                  //</li>
              //Fin Nuevo componente todoItem
              <TodoItem key={todo.id} todo={todo} borrar={(id) => onDeleteTodo(id)}  toggle={(id) => onToggleTodo(id)}/>
                
              
              ))
              }
            </ul>
    </>
    

  )
}
