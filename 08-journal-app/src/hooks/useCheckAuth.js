import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
export const useCheckAuth = () => {
  
    const { estado } = useSelector (state =>  state.login);

    const dispatch = useDispatch();
  
    useEffect(()=>{
  
      onAuthStateChanged (FirebaseAuth,async (user) => {
        if ( !user) return dispatch (logout());
  
        const {uid,email,displayName, photoURL} = user;
        dispatch ( login( {uid, email, displayName, photoURL }) );
      
      })
  
    },[]);
  
    return {
        estado
    }


}
