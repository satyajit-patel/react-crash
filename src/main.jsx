import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Box from './components/box/App.jsx'
import App from './components/hello/App.jsx'
import Nav from './components/navBar/App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App msg1='welcome folks' msg2='how you guys doing' />
    <Box description="An all-rounder is a cricketer who regularly performs well at both batting and bowling. Although all bowlers must bat and quite a handful of batsmen do bowl occasionally, most players are skilled in only one of the two disciplines and are considered specialists." />
  </StrictMode>,
)
