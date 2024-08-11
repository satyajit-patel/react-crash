import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Box from '../components/box/App.jsx'
import App from '../components/hello/App.jsx'
import Nav from '../components/navBar/App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App msg1='welcome folks' msg2='how you guys doing' />
    <Box />
  </StrictMode>,
)
