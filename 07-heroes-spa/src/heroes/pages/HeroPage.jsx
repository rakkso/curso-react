import React from 'react'
import { HeroesList } from '../components/HeroesList'
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const {heroid}=useParams();
  console.log(heroid);
  const hero = getHeroById(heroid);

  if (!hero) {
    return <Navigate to="/marvel"/>
  }
  return (
    <>
    <h1>{heroid}</h1>
    
</>
    
  )
}
