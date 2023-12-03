import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords,setCoords] = useState({x:0,y:0});

    useEffect(() => {

      const onMouseMove = ( {x,y}) => {
        const coords = {x,y};
        console.log( "Coordenadas:", coords);
        setCoords({x,y});
        
      }
    
      console.log ("Montando")
      window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        console.log ("DesMonando")
        window.removeEventListener('mousemove',onMouseMove)
      }
    }, [])
    
  return (
    <>
    <h1>Unsername repetido</h1>
    {JSON.stringify(coords)}
    </>
  )
}
