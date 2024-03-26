import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/09-useContext/LoginPage"
import { UserContext } from "../../../src/09-useContext/context/UserContext";

describe('Prueba de <LoginPage/>', () => { 

    const setUser = jest.fn();

    test('Debe de mostrar el componente sin el usuario', () => { 
        
        render(<UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>);
        screen.debug();

        const preTag = screen.getByLabelText('marcaUsuario');
        expect(preTag.innerHTML).toBe('null');
     })

     test('Debe de llamar al setuser cuando se hace click en el boton', () => { 
        
        render(<UserContext.Provider value={{user:null,setUser:setUser}}>
            <LoginPage/>
        </UserContext.Provider>);
        screen.debug();    

        const botonElement = screen.getByLabelText('marcaBoton');
        fireEvent.click(botonElement);

        expect(setUser).toHaveBeenCalledWith({"email": "juan@gmail.com", "id": 123, "name": "Juan"});
        
     })




})