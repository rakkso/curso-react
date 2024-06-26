import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../src/09-useContext/HomePage";
import { UserContext } from "../../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage/>', () => { 
    
    const user = {
        id: 1,
        name: "Óscar",
    }
    test('debe de mostrar el componente sin usuario',() =>{

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        );
        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        
        

    })

    test('debe de mostrar el componente con usuario',() =>{

        render(
            <UserContext.Provider value={{user:user}}>
                <HomePage />
            </UserContext.Provider>
        );
        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        
        

    })
 
 })