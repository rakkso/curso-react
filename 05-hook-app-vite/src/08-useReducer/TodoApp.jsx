import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { useTodos } from './useTodos';


const initialState = [/* {
  id: new Date().getTime(),
  description: 'Recolectar la piedra del alma',
  done: false,}
  ,
  {
    id: new Date().getTime()*3,
    description: 'Recolectar la piedra del tiempo',
    done: false,
  }*/
]

const funcionIni =  () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const {todos,total, totalHechos,onHandleNewTodo,onHandleDeleteTodo,onHandleToggleTodo} = useTodos();

    /*const [ todos, dispatchTodoAction ] = useReducer (todoReducer, initialState,funcionIni);

    const onHandleNewTodo = (todo) => {

      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      dispatchTodoAction(action);
      console.log("Recogido:",todo);
    }

    const onHandleDeleteTodo = ( id ) =>{
      const action = {
        type:  '[TODO] Delete Todo',
        payload: id
      }
      dispatchTodoAction(action);

    }

    const onHandleToggleTodo = (id) => {
      const action= {
        type: '[TODO] Toggle Todo',
        payload:id
      }
      dispatchTodoAction(action);

    }

    // cuando cambie el todo guardamos
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    
*/
  return (
    <>
    
        <h1>TodoApp: {total},<small> pendientes: {totalHechos} </small></h1>
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
             <TodoList todoLista={todos} onDeleteTodo= { (valor) => onHandleDeleteTodo(valor)} onToggleTodo= { (valor) => onHandleToggleTodo(valor)}/>
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
