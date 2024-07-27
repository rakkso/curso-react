import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en appRouter', () => { 
    
    test('Debe mostrar el login sino está autenticado', () => { 
        

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value= {contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter> 
        )

        //screen.debug();

        expect(screen.getAllByText('Login').length).toBe(1);
     })

     test('Debe mostar el componente Marvel si está utenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'Hola',
                id:'ABS'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value= {contextValue}>
                    <AppRouter/>>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        //screen.debug();

        expect(screen.getAllByText('MarvelPage').length).toBe(1);
      })
 })