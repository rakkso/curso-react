import React from 'react';
import {Link} from 'react-router-dom';

export const HeroCard = ({     
id,
superhero, 
publisher, 
alter_ego,
first_appearance,
characters}) => {

    const heroImageUrl =`/assets/heroes/${id}.jpg`;
    console.log("HeroCard con id: %s",id);
    console.log("HeroCard con heroImageUrl: %s",heroImageUrl);
  return (
    <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={heroImageUrl} className='card-img' alt={superhero}/>
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-tittle'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        <p className='card-text'>{characters}</p>
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>Mas ...</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
