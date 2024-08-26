import { createSlice } from '@reduxjs/toolkit'

export const autorizadorSlice = createSlice({
  name: 'autorizador',
  initialState : {

    estado: 'En proceso', /* autenticado, no autenticado */
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

    }
 },
})

// Action creators are generated for each case reducer function
export const { login,logout,precesando} = autorizadorSlice.actions;