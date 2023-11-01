import { render, screen } from "@testing-library/react"
import { GifExperApp } from "../src/GifExpertApp"

describe('Pruebas de GifExperApp', () => { 
    

    test('Pruebas de GifExperApp', () => { 
        
        render(<GifExperApp/>);
        screen.debug();

        // Podemos probar que el título es uno
        // Podemos probar si ponemos una nueva categoría la añade.

        

     })
 })