import { render,screen } from "@testing-library/react";
import {GifGrid} from "../src/components/GifGrid";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock("../src/hooks/useFetchGifs") 

describe('Pruebas de GifGrid', () => {
   
    const category = 'vegeta';

    test('Validamos que el estado inicial este mostrando loading ', () => {
        
                // inicializamos el mock
                useFetchGifs.mockReturnValue({
                    images: [],
                    isLoading: true
                })
                
        render(<GifGrid category={category}/>);
        //render(<GifGrid />);
        //screen.debug();
        expect(screen.getByText( 'Cargando...'));
        expect(screen.getByText( category));
    });


    test('debe mostrar items cuando se cargan las imágenes  useFetchGifs',() =>{

        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id:'Default',
                title:'Goku',
                url:'https://localhost/goku.jpg'
            }
        ]
        // inicializamos el mock
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>);
        screen.debug();

        expect (screen.getAllByRole('img').length).toBe(2);

    });
}
);