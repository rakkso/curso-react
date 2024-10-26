import { createSlice } from '@reduxjs/toolkit'

export const autorizadorSlice = createSlice({
  name: 'autorizador',
  initialState : {

    estado: 'checking', /* checking, autenticado, no-autenticado */
    uid: null,
    email: null,
    displayname: null,
    photoURL: null,
    errorMessage: null,

  },
  reducers: {
    login: (state,{payload}) => {

      state.estado= 'autenticado';
      state.uid= payload.uid;
      state.email= payload.email;
      state.displayName= payload.displayName;
      state.photoURL= payload.photoURL;
      state.errorMessage= payload.errorMessage;

    },
    logout: (state, {payload}) => {
     state.estado= 'no-autenticado';
     state.uid= null;
     state.email= null;
     state.displayname= null;
     state.photoURL= null;
     state.errorMessage= payload.errorMessage;
    },

    procesando: (state,action) =>{
      state.estado='checking';

    }
 },
})

// Action creators are generated for each case reducer function
export const { login,logout,procesando} = autorizadorSlice.actions;