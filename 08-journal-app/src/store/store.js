import { configureStore } from '@reduxjs/toolkit'
import { autorizadorSlice } from './auth/autorizadorSlice'

export const store = configureStore({
  reducer: {

    login: autorizadorSlice.reducer,
  },

 
})