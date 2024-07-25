import { types } from "../../../src/auth/types/types"

describe('Pruebas sobre Types.js valida que los valores no cambian', () => { 
    


     test('Types solo debe tener login y logout', () => { 
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        }) })
 })