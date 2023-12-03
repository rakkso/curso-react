import React, { useLayoutEffect, useRef, useState } from 'react'

export const BlockQuote = ( {title, category}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0,height:0})

  useLayoutEffect(() => {
    const { height, width}  = pRef.current.getBoundingClientRect();

    setBoxSize({height,width});
  
    }, [title])


  return (
    <>
    <blockquote className="blockquoute text-end"
      style={{display: 'flex' }}>
            <p ref={pRef} className="mb-1">{title}</p> 
            <footer className="blockquote-footer"> {category} </footer>
    </blockquote>
    <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
