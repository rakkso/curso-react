import { authReducer } from "../../../src/auth"
import { types } from "../../../src/auth/types/types"

describe('Prueba authReducer', () => { 
    

    test('debe retornar el estado por defecto', () => { 
        
        const iniState = {
            logged:false,
        }

        const action ={
            type:null
        }

        const {state} = authReducer(iniState,action);
        expect (state).toBeFalsy();
        //expect (images.length).toBe(0);
        //  expect (isLoading).toBeFalsy();

     })


     test('debe llamar al login y establecer el user', () => { 

        const iniState = {
            logged:false,
        }

        const userLogin = "pp";

        const action ={
            type:types.login,
            payload: userLogin
        }

        const {logged,user} = authReducer(iniState,action);
        
        expect(logged).toBeTruthy();
        expect(user).toBe(userLogin);
        

      })
     
      test('debe borrar el name y logged false cuando haga logout', () => { 
        
        const iniState = {
            logged:true,
        }

       

        const action ={
            type:types.logout,
            
        }

        const {logged,user} = authReducer(iniState,action);
        
        expect(logged).toBeFalsy();
        expect(user).toBeFalsy();
        
      })
     
      
 })