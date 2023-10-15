import { render,screen } from "@testing-library/react"
import GifItem from "../src/components/GifItem"

describe('Pruebas de GifItem', () => {
 
    const titulo ='Titulo ejemplo'
    const url = 'urlejemplo'

    test('Debe hacer match con el snapshot', () => { 
        
 

    
    const {container } = render (<GifItem title={titulo} url={url}/>);

    expect (container).toMatchSnapshot();
    })
    
    test('La url debe usarse en el img', () => { 
     
        render (<GifItem title={titulo} url={url}/>);

        //screen.debug nos enseña el código html renderizado
        screen.debug();
        const { src, alt } =screen.getByRole('img');
        expect (src).toBe("http://localhost/"+url);
        expect (alt).toBe(titulo);

        
    })

    test('debe mostrar el título en el componente ', () => { 
        render (<GifItem title={titulo} url={url}/>);
        expect( screen.getByText (titulo)).toBeTruthy();

     })

})