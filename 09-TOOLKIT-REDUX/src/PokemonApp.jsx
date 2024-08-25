import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {


    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getPokemons())
       },[])

 const {isLoading,pokemons,page}= useSelector (state => state.pokemon)
 console.log ("pokemons:",pokemons,"isLoading:",isLoading,"page:",page);

  return (
    <>
    <h1>Pokemon</h1>
<hr/>
<span>IsLoading:
{
    isLoading ? 'True':'False'
    }

</span>


<ul>
{pokemons.map( pokemon => (
    <li>{pokemon.name}</li>
))}


</ul>
<button onClick={() => dispatch (getPokemons(page))}>
          Next
        </button>
    </>
    )
}
