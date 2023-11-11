import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FromWithCustomHook = () => {


  const {formState,onInputChange} = useForm({
        username: 'pp',
        email:'popo',
        password:'miPassword',
      })

  const {username, email, password} = formState;


    
  return (
    <> 
    <h1>FromWithCustomHook</h1>
    <hr/> Username:
    <input 
        type="text"
        className="from-control"
        placeholder='perico'
        name='username'
        value={username}
        onChange={ onInputChange}
    />
    <br/>
    Email
    <input 
        type="email"
        className="from-control mt-2"
        placeholder='pp@pp.com'
        name='email'
        value={email}
        onChange={ onInputChange}
    />

<br/>
    Password: 
    <input 
        type="password"
        className="from-control mt-2"
        placeholder='pp@pp.com'
        name='password'
        value={password}
        onChange={ onInputChange}
    />
    {
        (username === 'pp') && <Message/>
    }
    
    </>
   
  )
    
}
