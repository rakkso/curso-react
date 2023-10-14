import { render } from "@testing-library/react"
import GifItem from "../src/components/GifItem"

describe('Pruebas de GifItem', () => {
    
    test('Debe hacer match con el snapshot', () => { 
        
    const titulo ='Titulo ejemplo'
    const url = 'urlejemplo'

    
    const {container } = render (<GifItem title={titulo} url={url}/>);

    expect (container).toMatchSnapshot();
    })
    
    

})