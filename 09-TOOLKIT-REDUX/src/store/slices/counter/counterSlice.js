import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter23',
  initialState : {
    contador:10,
    tiempo:0
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.contador += 1
    },
    decrement: (state) => {
      state.contador -=1
    },
    incrementBy: (state,action) => {
      console.log("counterSlice Action",action.payload);
      state.contador += action.payload
    },


  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,incrementBy} = counterSlice.actions;

