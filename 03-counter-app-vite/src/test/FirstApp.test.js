
  /**
 * @jest-environment jsdom
 */

import { render,screen } from '@testing-library/react'
import { FirstApp } from '../FirstApp'


describe('Pruebas en <FistApp />',() =>{
    test('debe de hacer match con el snapshot',() =>{

        const titulo = 'Hola, Soy Goku'
        const {container } = render (<FirstApp titulo={titulo}/>);

        //console.log(container);
        expect ( container ).toMatchSnapshot();
    })

    test('debe mostrar el título en un h1',() =>{

        const titulo = 'Hola, Soy Goku'
        const {container, getByText, getByTestId } = render (<FirstApp titulo={titulo}/>);
        //console.log(getByText(titulo));
        //miramos que nuestro título este:
        expect (getByText(titulo)).toBeTruthy();
        expect (screen.getByText(titulo)).toBeTruthy();

       
        //miramos que el título esté en un h1, el primero
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe( titulo);

        expect( getByTestId('test_1').innerHTML).toContain(titulo);

    })
})

