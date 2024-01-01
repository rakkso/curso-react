import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';


const initialState = [ {
  id: new Date().getTime(),
  description: 'Recolectar la piedra del alma',
  done: false,}
  ,
  {
    id: new Date().getTime()*3,
    description: 'Recolectar la piedra del alma',
    done: false,
  }
]

export const TodoApp = () => {


    const [ todos, dispatchTodoAction ] = useReducer (todoReducer, initialState);

    const onHandleNewTodo = (todo) => {
      console.log("Recogido:",todo);
    }

  return (
    <>
    
        <h1>TodoApp: 10,<small> pendientes: 2</small></h1>
        <hr/>
        <div className="row">
          <div className='col-7'>
             { /* Nuevo componente todoList le debemos pasar la lista de items a dibujar
            <ul className='list-group'>
              {
                todos.map( todo => (
                   //Nuevo componente todoItem 
                  <li className='list-group-item d-flex justify-content-between'>
                  <span className='align-self-center'>Item1</span>
                  <button className='btn btn-danger'>Borrar</button>
                  </li>
              //Fin Nuevo componente todoItem  
                ))
              }
            </ul>
             Nuevo componente todoList */}
             <TodoList todoLista={todos}/>
          </div>
        </div>
        <div className='col-5'>
          
          <h4>Agregar TODO</h4>
          <hr/> 
          <AddTodo onNewTodo={ (valor) => onHandleNewTodo(valor)}    />
          { /* Todo Add  tenemos que emitir el nuevo valor, un onNewTodo. Debe retornar un todoItem
             que en realidad lo que hace es llamar a una función que definimos aqui handleNewTodo que imprimer por consola el todo }
          <form>
            <input
            type='text'
            placeholder='¿Qué ha que hacer?'
            className='form-control'
            />
            <button
            type='submit'
            className='btn btn-outline-primary mt-1'
            > Agregar </button>
            </form> 
            { /* Fin Todo Add */}
        </div>
    </>
  )
}
