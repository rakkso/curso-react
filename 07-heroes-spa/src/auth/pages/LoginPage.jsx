import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext (AuthContext);

  const lastPath  = localStorage.getItem('lastPath') || '/';


  const onLogin =() =>{
    
    navigate(lastPath,{replace:true});
    console.log ("LoginPage haciendo login");
    login("Óscar Bella");
  }

  return (
    <div className='container mt-5'>
        <h1>LoginPage</h1>
        <button onClick={onLogin} className='btn btn-primary'>Login</button>
    </div>
  )
}
