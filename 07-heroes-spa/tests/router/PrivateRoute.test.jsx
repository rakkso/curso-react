import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas sobre el privateRouter', () => { 
    
    test('Si está logeado debe ir a la ruta privada, ruta del hijo', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Hola',
                id:'ABS'
            }
        }
//

        Storage.prototype.setItem = jest.fn();


        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}> 
                   <PrivateRoute>
                        <h1>Ruta privada1</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada1')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman');
        
     })



 })