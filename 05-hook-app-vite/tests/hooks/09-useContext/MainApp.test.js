import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../../src/09-useContext/MainApp"
import { render, screen } from "@testing-library/react";

describe('Pruebas de <MainApp/>', () => { 
    
    test('Debe mostar la homePage ', () => { 
        
        
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
            );
    
           // screen.debug();

        expect(screen.getByText('HomePage')).toBeTruthy();
    
    })

    test('Debe Mostra la página LoginPage', () => { 
        
        render(
            <MemoryRouter initialEntries={['/Login']}>
                <MainApp/>
            </MemoryRouter>
            );
    
           // screen.debug();

        expect(screen.getByText('LoginPage')).toBeTruthy();

     })
 })