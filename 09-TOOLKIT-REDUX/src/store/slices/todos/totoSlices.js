import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'counter23',
  initialState : {
    contador:10,
    tiempo:0
  },
  reducers: {
    increment: (state) => {
      state.contador += 1
    },

 },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,incrementBy} = todoSlice.actions;