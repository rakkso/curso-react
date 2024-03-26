/**
 * @jest-environment jsdom
 */

import {fireEvent, render,screen} from '@testing-library/react';
import MultipleCustomHooks from '../../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../src/hooks/useFetch';
import { useCounter } from '../../../src/hooks/useCounter';

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');


describe('Pruebas en componente <MultipleCustomHooks/>', () => { 
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => { 
        

        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        });  

        render(<MultipleCustomHooks />);
        screen.debug();

        expect( screen.getByText('Loading...'));

        const nextButton = screen.getByRole('button',{name:'Next quote'})
        expect(nextButton.disabled).toBeTruthy();

    })

    test('Debe mostrar un quote', () => { 
        
        useFetch.mockReturnValue({
            data:{ category: 'Oscar', title:'hola '},
            isLoading:false,
            hasError:null
        })

        render(<MultipleCustomHooks />);
        screen.debug();

        expect(screen.getByText('Oscar')).toBeTruthy();
        expect(screen.getByText('hola')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name:'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

     })

     test('Debe llamar a la función incrementar', () => { 
        
        useFetch.mockReturnValue({
            data:{ category: 'Oscar', title:'hola '},
            isLoading:false,
            hasError:null
        })

        render(<MultipleCustomHooks />);
        screen.debug();

        const nextButton = screen.getByRole('button',{name:'Next quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

      })
 })