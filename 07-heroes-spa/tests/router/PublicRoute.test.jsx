/**
 * @jest-environment jsdom
 */

import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"
import { render, screen } from '@testing-library/react'

describe('Preubas sobre el PublicRoute', () => { 
    
    test('Debe mostrar el children si no está logeado', () => { 
        
        const contextValue = {
            logged: false,
        }
        
        render(
            <AuthContext.Provider value={ contextValue}>
                <PublicRoute><h1>Ruta pública</h1></PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta pública')).toBeTruthy();

     })

     test("Debe mostar la navegación a una página privada ",() => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Hola',
                id:'ABS'
            }
        }
        
        render(
            <AuthContext.Provider value={ contextValue}>
                 <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute><h1>Ruta pública</h1></PublicRoute>
                         }/>
                         <Route path="/" element={<h1>Ruta privada</h1>}/>
                    </Routes>
                 </MemoryRouter>
                
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();


     })
 })