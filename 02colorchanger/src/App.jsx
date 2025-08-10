
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')

  return (
    <div  style ={{backgroundColor : color  , width:"100%", height:"100vh"}} >
      <button onClick = {() => setColor('red')} >Red</button>
      <button onClick = {() => setColor('white')}>White</button>
      <button onClick = {() => setColor('lavender')}>Lavender</button>
      <button onClick = {() => setColor('green')}>Matte Green</button>
      <button onClick = {() => setColor('grey')}>Greyish</button>
    </div>
  )
}

export default App
