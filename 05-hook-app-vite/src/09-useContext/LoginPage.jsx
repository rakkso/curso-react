import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
 
  const {user, setUser} = useContext( UserContext );

  return (
    <>
    <h1>LoginPage</h1>
    <hr/>
    <pre aria-label='marcaUsuario'>
      {JSON.stringify(user, null, 3)}
    </pre>

    <button className='btn btn-primary' aria-label='marcaBoton'
    onClick={()=> setUser({id:123,name:'Juan', email:'juan@gmail.com'})}
    >SetearUsuario</button>
   </>
  )
}
