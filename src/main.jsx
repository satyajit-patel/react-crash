import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Btn from './components/Btn'
import Hero from './components/Hero'
import Card from './components/Card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='bg-green-400 rounded-md mb-4'>Tailwind Test</h1>
      <Card name="Batman" desc="It's not who I am Underneath.. but what I do that defines me" />
    </div>
    {/* <Hero /> */}
    {/* <Btn /> */}
  </StrictMode>
)
