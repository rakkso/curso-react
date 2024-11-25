import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote= () => {
    
    return async (dispatch,getState) => {

        console.log("StartNewNote:",getState());


        const {uid} = getState().login;
    
        const newNote = {
         title:'',
         body:'',
         date: new Date().getTime(),
         }
    
         const newDoc = doc( collection (FirebaseDB, `${uid}/journal/notes`));
         await setDoc(newDoc,newNote);
    


    }
}