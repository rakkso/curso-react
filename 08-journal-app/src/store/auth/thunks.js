import { login, logout, procesando } from "./autorizadorSlice";
import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"

export const checkingAuthentication = ({email,password}) => {
    return async(dispatch,getState) => {
       
            dispatch (procesando());
            console.log("thunks:","email:",email,"password:",password);
            const {ok, uid, photoURL, displayName,errorMessage } = await loginUserWithEmailPassword ({email,password})
            //console.log("statCreatingUserWiehEmailPassword:")
            if (!ok) return dispatch(logout({errorMessage}))
             dispatch ( login ({ uid, displayName, email, photoURL})) 
    
    
        }
    }



export const startGoogleSignIn = (email,password) => {
        return async(dispatch,getState) => {
           
            
                dispatch (procesando());
        
        
                const result = await singInWithGoogle();
                console.log ({result})
                if (!result.ok) return dispatch ( logout() );
                dispatch (login(result));

                
            }
        }
    

 export const statCreatingUserWithEmailPassword =  ({ email, password, displayName }) =>{
            return async (dispatch) => {

                console.log ("name:",email,"password", password,"displayName",displayName);
                dispatch (procesando());
                const {ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword ({email,password,displayName})
                //console.log("statCreatingUserWiehEmailPassword:")
                if (!ok) return dispatch(logout({errorMessage}))
                 dispatch ( login ({ uid, displayName, email, photoURL}))
            }
}


export const startLogout = () => {

    return async (dispatch) => {

        await logoutFirebase();
        dispatch ( logout() );
    }
}



export const startNewNote= () => {
    
    return async (dispatch,getState) => {

        console.log("StartNewNote",getState().auth);


        const {uid} = getState().auth;
    
        const newNote = {
         title:'',
         body:'',
         date: new Date().getTime(),
         }
    
         const newDoc = doc( collection (FirebaseDB, `${uid}/journal/notes`));
         await setDoc(newDoc,newNote);
    


    }
}




