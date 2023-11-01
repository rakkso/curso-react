import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
      console.log ("Monando")
    
      return () => {
        console.log ("DesMonando")
      }
    }, [])
    
  return (
    <>
    <h1>Unsername repetido</h1>
    </>
  )
}
