
  /**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp'


describe('Pruebas en <FistApp />',() =>{
    test('debe de hacer match con el snapshot',() =>{

        const titulo = 'Hola, Soy Goku'
        render (<FirstApp titulo={titulo}/>)
    })
})