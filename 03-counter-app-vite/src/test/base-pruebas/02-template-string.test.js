import { getSaludo } from '../../base-pruebas/02-template-string.js';

describe('Pruebas de template strings', () =>{

    test('La llamada debe devolver Hola Óscar', ()=>{
    
        const miSaludo = getSaludo('Óscar');
        
        //3. Observar el comportamiento esperado
        expect(miSaludo).toBe("Hola Óscar");
        
    });
    
    });