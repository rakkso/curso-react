import { configureStore } from '@reduxjs/toolkit'
import { autorizadorSlice } from './auth/autorizadorSlice'
import { journalSlice } from './journal/journalSlice'

export const store = configureStore({
  reducer: {

    login: autorizadorSlice.reducer,
    journal: journalSlice.reducer,
  },

 
})