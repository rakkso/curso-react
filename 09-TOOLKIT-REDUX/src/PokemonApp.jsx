import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {


    const dispatch = useDispatch();
 useEffect(()=> {
    dispatch(getPokemons())
 },[])

  return (
    <>
    <h1>Pokemon</h1>
<hr/>
<ul>
<li>hola</li>
<li>hola</li>
<li>hola</li>
<li>hola</li>
</ul>
    </>
    )
}
