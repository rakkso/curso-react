import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth";

describe('Pruebas sobre el privateRouter', () => { 
    
    test('Si está logeado debe ir a la ruta privada, ruta del hijo', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Hola',
                id:'ABS'
            }
        }



        render(
            <AuthContext.Provider value={ contextValue}>
                <PrivateRoute><h1>Ruta privada</h1></PrivateRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        
     })
 })