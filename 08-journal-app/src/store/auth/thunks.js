import { login, logout, procesando } from "./autorizadorSlice";
import { singInWithGoogle } from "../../firebase/providers"

export const checkingAuthentication = (email,password) => {
    return async(dispatch,getState) => {
       
            dispatch (procesando());
    
    
    
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
    