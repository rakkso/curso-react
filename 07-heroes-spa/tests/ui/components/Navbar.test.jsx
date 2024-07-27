import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockMifuncion = jest.fn();
//Mockea el useNavigate para poder preguntar si se ha ejecutado.
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate : () => mockMifuncion,
}))

describe('Pruebas NavBar', () => { 
    beforeEach(()=>jest.clearAllMocks()); //para dejar todos los mocks en el estado inicial.

    const contextValue = {
        logged: true,
        user: {
            name: 'Hola22',
            id:'ABS'
        }
    }

    logout=jest.fn();
    login= jest.fn();


    
    
    test('Debe validar que se muestre el nombre del usuario', () => { 
        

        const contextValue = {
            logged: true,
            user: {
                name: 'Hola22',
                id:'ABS'
            }
        }
               /*  <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute><h1>Ruta pública</h1></PublicRoute>
                         }/>
                         <Route path="/" element={<h1>Ruta privada</h1>}/>
                    </Routes>
                 </MemoryRouter>*/

        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
       //screen.debug();
       expect(screen.getByText('Hola22')).toBeTruthy();
     })

     test('Cuando hace logout debe ejecutar la función de logout', () => { 





        render(

            <AuthContext.Provider value={{...contextValue,logout:logout,login:login}}>
                                <MemoryRouter>
                <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

       // screen.debug();

        const logoutBtn = screen.getByRole('button'); //porque solo hay uno
        fireEvent.click(logoutBtn);
        expect(logout).toHaveBeenCalled();
        expect(mockMifuncion).toHaveBeenCalledWith('/login', {'replace': true});

      })
 })

