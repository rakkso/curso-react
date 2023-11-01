import { useState } from "react"


export const useCounter = (inicial = 10 ) => {

    const [counter,setCounter] = useState(inicial);

    const increment = ()  => {
        setCounter(counter +1)
    }

    const reset = () => {
        setCounter(0)
    }

    const decrement = () => {
        setCounter(counter-1)
    }

    return {
        counter,
        increment,
        reset,
        decrement,

    }
}