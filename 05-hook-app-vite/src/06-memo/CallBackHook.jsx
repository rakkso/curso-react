import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState (10);
    const incrementFather = useCallback(
      () => {
        setCounter((value) => value +1)
      },
      [],
    )
    
  /*   const incrementFather = () => {
        setCounter(counter +1)
    }
 */
    console.log('CallBack generandose');
  return (
    <>
        <h1>useCallBack Hook: { counter } </h1>
        <hr/>
        <ShowIncrement increment= {incrementFather} />
    </>
    )
}
