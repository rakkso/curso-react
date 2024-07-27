

import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'

import { getHeroesByName } from '../helpers/getHeroesByName.js'
//import {queryString} from 'query-string'


export const SearchPage = () => {
  const queryString = require('query-string'); // con el import los test dan error
  const navigate = useNavigate();

  const location = useLocation();


  console.log("location %s",location);
  //const {query} =queryString.parse(location.search);
 // console.log(location);
  
  // Si descomento esto peta, no se el motivo : console.log("query:%s",query);
  const {miQuery=''} = queryString.parse(location.search);
  console.log("Mi query:%s",miQuery);
  const heroes = getHeroesByName(miQuery);
  console.log(heroes);
  const showSearch = (miQuery.length === 0);
  console.log (showSearch);
  const showError = (miQuery.length > 0) && heroes.length === 0;
  console.log (showError);
  

  const { searchText, onInputChange} =useForm({
    searchText:miQuery
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //console.log({searchText});

    //if (searchText.trim().length <=1 ) return;

    navigate(`?miQuery=${searchText}`);

  }

  return (
    <>
    <h1>SearchPage</h1> 
    <div className="row">
      <div className="col-5">
        <h4>Searching</h4>
        <hr/>
        <form onSubmit={onSearchSubmit}  aria-label="form">
          <input
            type="text"
            placeholder='Search a hero'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr/>
        <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '':'none'}}>Search a hero</div>
        <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '':'none'}}>No hero with <b>{miQuery}</b></div>

        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
        
      </div>
    </div>
    </>

   
  )
}
