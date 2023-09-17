
  /**
 * @jest-environment jsdom
 */

  import { fireEvent, render,screen } from '@testing-library/react'

import { CounterApp } from '../CounterApp';
  
  
  describe('Pruebas en <CounterApp />',() =>{

      let valorInicial = 100;
      test('debe de hacer match con el snapshot',() =>{
  
          
          const {container } = render (<CounterApp valor={valorInicial}/>);

  
          //console.log(container);
          expect ( container ).toMatchSnapshot();
      })
  
      test('debe mostrar el valor inicial de 100',() =>{
  
        
          const {container, getByText, getByTestId } = render (<CounterApp valor={valorInicial}/>);
          //console.log(getByText(titulo));
          //miramos que nuestro título este:
          expect (getByText(valorInicial)).toBeTruthy();
          expect (screen.getByText(valorInicial)).toBeTruthy();
  
         
          //miramos que el título esté en un h2, el primero

        
          const h2 = container.querySelector('h2');
          expect(h2.innerHTML).toContain(valorInicial.toString());
  
          expect( getByTestId('test_2').innerHTML).toContain(valorInicial.toString());
          expect(screen.getByRole('heading',{ level :2}).innerHTML).toContain(valorInicial.toString());
  
      })

      test('debe funcionar el botón +1',() =>{
        //screen.debug();
        const {container,getByText} = render (<CounterApp valor={valorInicial}/>);
        //screen.debug();
        fireEvent.click(screen.getByText('+1'));
        //screen.debug();

        expect(screen.getByRole('heading',{ level :2}).innerHTML).toContain((++valorInicial).toString());
      
    })


    test('debe funcionar el botón -1',() =>{
        //screen.debug();
        const {container,getByText} = render (<CounterApp valor={valorInicial}/>);
        //screen.debug();
        fireEvent.click(screen.getByText('-1'));
        //screen.debug();

        expect(screen.getByRole('heading',{ level :2}).innerHTML).toContain((--valorInicial).toString());
      
    })

    test('debe funcionar el botón reset',() =>{
        //screen.debug();
        const {container,getByText} = render (<CounterApp valor={valorInicial}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //screen.debug();
        fireEvent.click(screen.getByRole('button',{ name :'miBoton'}));

        //screen.debug();

        

        expect(screen.getByText(valorInicial)).toBeTruthy();
      
    })
  })
  
  