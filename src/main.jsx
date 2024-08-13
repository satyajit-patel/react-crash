import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Btn from './components/Btn'
import Card from './components/Card'
import Counter from './components/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className='bg-green-400 rounded-md mb-4'>Tailwind Test</h1>
        <Card name="Batman" desc="not yet.. not everything" />
        <Btn btnText='click me' />
        <Counter />
    </div>

  </StrictMode>
)
