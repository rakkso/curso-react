import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../src/components/AddCategory"


describe('Pruebas en <AddCategory />', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={()=>{}}/>)
        screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {value:'Solo'}});

        expect (input.value).toBe('Solo');
     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Solo';
        render(<AddCategory onNewCategory={()=>{}}/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
     

        fireEvent.input(input,{target:{value:inputValue}});
        screen.debug(); // Vemos que ahora en el value tenemosun valor
        fireEvent.submit(form); //lanzamos el submit sobre el form, para ello 
        //hemos puesto en el html generado arial-label='form'  para que sepa encontrarlo
        screen.debug();

        expect(input.value).toBe('');

      })
})