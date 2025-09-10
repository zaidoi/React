import {useDispatch,useSelector} from "react-redux"
import { increment,decrement } from "./slice/Counter"
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter)
 const dispatch = useDispatch()

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <p>Count is {count} </p>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  )
}

export default App
