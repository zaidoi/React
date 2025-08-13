import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)


  const increment = () =>{
      setCount(count => count === 10 ? 0 : count + 1 )
  }


  const decrement = () =>{
    setCount(count => count > 0 ? count - 1 : 0)
  }


  return (
    <>
      <h2>Number Counting {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}



export default App
