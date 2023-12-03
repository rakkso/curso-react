import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { BlockQuote } from '../03-examples/BlockQuote';

export default function Layout() {
    

  const {counter,increment,reset,decrement} = useCounter(1);
    //const url = 'https://fakestoreapi.com/products/' + counter;
    //const {data, isLoading, hasError} = useFetch(url);

    const {data, isLoading, hasError} = useFetch(`https://fakestoreapi.com/products/${counter}` );
  
    console.log('MultipleCustmoHooks data:', data);
    console.log('MultipleCustmoHooks isLoading:', isLoading);
    console.log('MultipleCustmoHooks hasError:', hasError);


    const {category, title} = !!data && data;

    /*const category="micategoria";
    const title="miTitulo";
    */
    
    /*if (!!data) {
      console.log('MultipleCustmoHooks data[0]:',data[0])
      //const {category, title} = !!data && data[0];
      const {category, title} = data[0];
      console.log('MulitpleCustomHooks category:',category);
      console.log('MulitpleCustomHooks title:',title);
    } else {
      console.log('MultipleCustmoHooks !!data:',false)

      const category="micategoria";
      const title="miTitulo";
  
    }*/
    
    return (
 
       <>
    <h1>MultipleCustomHooks</h1>
    <hr/>

    {
      isLoading
        ? (
            <LoadingQuote/>
        )
        : (
          <BlockQuote title={title} category={category}/>
        )
    }
    <button className='btn btn-primary'  onClick={() => increment()} disabled={isLoading}>
    
      Next quote
    </button>
    </>
  )

}