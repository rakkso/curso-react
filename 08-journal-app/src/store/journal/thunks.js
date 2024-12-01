import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setSaving } from "./journalSlice";

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