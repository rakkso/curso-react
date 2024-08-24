import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch,useSelector} from 'react-redux';
import { increment,decrement,incrementBy } from './store/slices/counter';
function App() {
  const [count, setCount] = useState(0)

  const {contador} = useSelector (state => state.counter)
  const dispatch = useDispatch();


  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch (increment())}>
          count is: {contador}
        </button>
        <div className="card">
        <button onClick={() => dispatch (decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch (incrementBy(5))}>
          Increment by 5
        </button>
      </div>

      </div>

    </>
  )
}

export default App
