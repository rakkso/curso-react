import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setNotes, setSaving } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote= () => {
    
    return async (dispatch,getState) => {

        console.log("StartNewNote:",getState());
        dispatch (setSaving());

        const {uid} = getState().login;
    
        const newNote = {
         title:'',
         body:'',
         date: new Date().getTime(),
         }
    
         const newDoc = doc( collection (FirebaseDB, `${uid}/journal/notes`));
         await setDoc(newDoc,newNote);
         dispatch(addNewEmptyNote());
         dispatch(setActiveNote(newNote));
    


    }


}

export const startLoadNotes= () => {

    return async (dispatch,getState) => {
        
        console.log ("StartLoadNotes");

        const {uid } = getState().login;
        const notas = await  loadNotes(uid);

        dispatch(setNotes(notas));

    }
}

export const startSetNotes = (nota) => {

    return (dispatch,getState) => {
        dispatch(setActiveNote(nota));
    }
}