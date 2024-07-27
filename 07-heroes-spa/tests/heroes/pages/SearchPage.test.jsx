/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"


jest.mock('query-string', () => ({
    parse: jest.fn(() => ({ foo: 'bar', abc: 'xyz',miQuery:'batman' })),
    stringify: jest.fn(),
    // Add other methods you need to mock here
  }));

  const mockMifuncion = jest.fn();
//Mockea el useNavigate para poder preguntar si se ha ejecutado.
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate : () => mockMifuncion,
}))

describe('Pruebas de SearchPages', () => { 
    beforeEach(()=>jest.clearAllMocks()); //para dejar todos los mocks en el estado inicial.


    test('Deben mostarse los valores por defecto', () => { 
        
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
     })

     test('Deben mostarse la busqueda de batman', () => { 
        
        const { container } = render(
            <MemoryRouter initialEntries={['/search?miQuery=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        //screen.debug();
        const input = screen.getByRole('textbox');
        expect (input.value).toBe('batman');
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
        const alert = screen.getByLabelText('alert-danger');
        expect (alert.style.display).toBe('none');


        
     })

     test('Debe mostar error si no encuenta', () => { 
        
        jest.clearAllMocks(); //para dejar todos los mocks en el estado inicial.
        jest.mock('query-string', () => ({
            parse: jest.fn(() => ({ foo: 'bar', abc: 'xyz',miQuery:'batman123' })),
            stringify: jest.fn(),
            // Add other methods you need to mock here
          }));


          render(
            <MemoryRouter initialEntries={['/search?miQuery=batman123']}>
                <SearchPage/>
            </MemoryRouter>

          )
          //screen.debug();

          //Este no lo hago porque como  he forzado el comportamiento del queryString a que retorne batman, no puedeo hacer que retorne otra cosa.
      })

      test('Cuando enviemos el formulario debe navegar', () => { 
        
        const inputValue='superman'
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>

          )

          const input = screen.getByRole('textbox');
          fireEvent.change(input, {target: {name:'searchText',value:inputValue}});

          const form = screen.getByRole('form');
          fireEvent.submit(form);

          expect( mockMifuncion).toHaveBeenCalledWith(`?miQuery=${inputValue}`);



       })
 })
