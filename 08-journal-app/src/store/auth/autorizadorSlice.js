import { createSlice } from '@reduxjs/toolkit'

export const autorizadorSlice = createSlice({
  name: 'autorizador',
  initialState : {

    estado: 'no-autenticado', /* checking, autenticado, no-autenticado */
    uid: null,
    email: null,
    displayname: null,
    photoURL: null,
    errorMessage: null,

  },
  reducers: {
    login: (state,action) => {

    },
    logout: (state, action) => {

    },

    procesando: (state,action) =>{
      state.estado='checking';

    }
 },
})

// Action creators are generated for each case reducer function
export const { login,logout,procesando} = autorizadorSlice.actions;