import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Sudee from './Sudee.jsx'
//import Usestatebutton from './Usestatebutton.jsx'
import App from "./App.jsx"; // Relative path
//import Drill from './Drill.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Sudee/>
    <Drill/>
    <Usestatebutton/>*/}
    
    <App/>
    
    
  </StrictMode>,
)