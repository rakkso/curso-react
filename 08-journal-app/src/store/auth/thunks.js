import { procesando } from "./autorizadorSlice";

export const checkingAuthentication = (email,password) => {
    return async(dispatch,getState) => {
       
            dispatch (procesando());
    
    
    
        }
    }



export const startGoogleSignIn = (email,password) => {
        return async(dispatch,getState) => {
           
                dispatch (procesando());
        
        
        
            }
        }
    