import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';

export default function MultipleCustomHooks() {
    

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
            <div className=" alert alert-info text-center">
              Loading...
            </div>
        )
        : (
          <blockquote className="blockquoute text-end">
            <p className="mb-1">{title}</p> 
            <footer className="blockquote-footer"> {category} </footer>
          </blockquote>
          

        )
    }
    <button className='btn btn-primary'  onClick={() => increment()} disabled={isLoading}>
    
      Next quote
    </button>
    </>
  )

}