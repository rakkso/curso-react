/**
 * @jest-environment jsdom
 */
import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el useCounter', () => { 
    
    
  test('Debe retornar los valores por defecto', () => { 

    const {result } = renderHook(()=> useCounter());
    const { counter, decrement, increment, reset} = result.current;

    expect( counter ).toBe(10);
    expect( decrement).toEqual ( expect.any(Function));
    expect( increment ).toEqual( expect.any(Function));
    expect( reset ).toEqual( expect.any( Function));
    
  });  
  
  test('debe de generar el counter con el valor de 100', () => {

    const {result } = renderHook(()=> useCounter(100));

    const { counter, decrement, increment, reset} = result.current;

    expect( counter ).toBe(100);

  });

  test('debe de incrementar el contador',() =>{
    const {result } = renderHook(()=> useCounter(100));

    const { counter, decrement, increment, reset} = result.current;

    act(()=>{
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  })

  test('debe de decrementar el contador',() =>{
    const {result} = renderHook(()=> useCounter(100));

    const { counter, decrement, increment, reset} = result.current;

    act(()=>{
      decrement();
      decrement();
    });

    expect(result.current.counter).toBe(98);
  })

    test('debe de incrementar el contador',() =>{
    const {result } = renderHook(()=> useCounter(100));

    const { counter, decrement, increment, reset} = result.current;

    act(()=>{
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  })

  test('debe de decrementar el contador',() =>{
    const {result } = renderHook(()=> useCounter(100));

    const { counter, decrement, increment, reset} = result.current;

    act(()=>{
      decrement();
      decrement();
    });

    expect(result.current.counter).toBe(98);
  })

  test('debe realizar el reset',() =>{
    const {result } = renderHook(()=> useCounter(100));

    const { counter, decrement, increment, reset} = result.current;

    act(()=>{
      reset();
      
    });

    expect(result.current.counter).toBe(0);
  })

  
})