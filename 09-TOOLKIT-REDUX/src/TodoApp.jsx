import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todoApis';




export const TodoApp = () => {

 // const {data: todos =[] , isLoading} =  useGetTodosQuery();
/*esto hace que cojamos el data lo renombra a todos y si no existe lo pone a array vacio*/

const [todoId, setTodoId] = useState(1);

const {data: todo , isLoading} =  useGetTodoQuery(todoId);

const nextTodo = () => {
  setTodoId(todoId +1);


}

const prevTodo =() => {
  setTodoId(todoId+1);
}

  return (
<>
<h1> Todos - RTK Query </h1>
<hr/>
<h4>isLoading: {isLoading ? 'True':'False'}</h4>

<pre>{JSON.stringify(todo)}</pre>

{/*<ul>
  { todos.map( todo => (
    <li key={todo.id}>
      <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
      {todo.title}
    </li>
  ))}
</ul>*/}

<button onClick={prevTodo}>
    Prev Todo
</button>
<button onClick={nextTodo}>
    Next Todo
</button>
</>
  )
}
