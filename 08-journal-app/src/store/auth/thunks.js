import { login, logout, procesando } from "./autorizadorSlice";
import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"

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
    

 export const statCreatingUserWiehEmailPassword =  ({ email, password, displayName }) =>{
            return async (dispatch) => {

                console.log ("name:",email,"password", password);
                dispatch (procesando());
                const resp = await registerUserWithEmailPassword ({email,password,displayName})
            }
}
    