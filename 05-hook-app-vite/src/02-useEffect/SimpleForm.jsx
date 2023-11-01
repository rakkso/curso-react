import React, { useEffect, useState } from 'react'

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
        ...formState,
        [name]:value, // funciona porque el nombre del campo del form coincide con el nombre del campo del useState
    })



  }
  useEffect( () => {
    console.log('Me acabo de ejecutar');
    })

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
    
    </>
   
  )
    
}
