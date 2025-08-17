import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import General from './components/General.jsx'
import App from './App.jsx'
import Education from './components/Education.jsx'
import Experince from './components/Experince.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
