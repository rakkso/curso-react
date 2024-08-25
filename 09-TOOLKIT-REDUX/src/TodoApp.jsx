import React from 'react'
import { useGetTodosQuery } from './store/apis/todoApis';




export const TodoApp = () => {

  const {data: todos =[] , isLoading} =  useGetTodosQuery();
/*esto hace que cojamos el data lo renombra a todos y si no existe lo pone a array vacio*/
  return (
<>
<h1> Todos - RTK Query </h1>
<hr/>
<h4>isLoading: {isLoading ? 'True':'False'}</h4>

<pre>...</pre>

<ul>
  { todos.map( todo => (
    <li key={todo.id}>
      <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
      {todo.title}
    </li>
  ))}
</ul>
<button>
    Next Todo
</button>
</>
  )
}
