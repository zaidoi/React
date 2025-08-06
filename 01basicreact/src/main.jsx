import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from './Greeting.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <App/>
  </StrictMode>,
)
