import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'pp',
    email:'popo'
  })

  const {username, email} = formState;

  const  onInputChange = ( {target}) =>{

    const {name,value} = target;
    //console.log({name, value});

    setFormState({
        ...formState, // todos los campos que hubiese
        [name]:value, // funciona porque el target nos devuelve los campos name y value del form que han cambiado
    })



  }
  useEffect( () => {
    //console.log('Me acabo de ejecutar');
    },[])

    useEffect( () => {
        //console.log('Me acabo de ejecutar por que ha cambiado formstate');
    },[formState])

    useEffect( () => {
        //console.log('Me acabo de ejecutar por que ha cambiado email');
    },[email])

 
    
  return (
    <> 
    <h1>Formulario Simple</h1>
    <hr/>
    <input 
        type="text"
        className="from-control"
        placeholder='perico'
        name='username'
        value={username}
        onChange={ onInputChange}
    />

    <input 
        type="email"
        className="from-control mt-2"
        placeholder='pp@pp.com'
        name='email'
        value={email}
        onChange={ onInputChange}
    />
    {
        (username === 'pp') && <Message/>
    }
    
    </>
   
  )
    
}
