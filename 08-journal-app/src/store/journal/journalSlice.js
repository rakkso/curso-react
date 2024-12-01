import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState : {
    isSaving: false,
    messageSaved:'',
    notes:[],
    active:null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
        state.isSaving=false;

    },
    setActiveNote: (state, action) => {
      state.active=action.payload;

    },
    setNotes: (state, action) => {

    },
    setSaving: (state, action) => {

      state.isSaving=true;

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    },

 }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNote,deleteNodeById } = journalSlice.actions;