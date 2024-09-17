import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate('/About')
  }
  const handleDashboard = () => {
    navigate('/Dashboard')
  }

  return (
    <div>
        <div className='bg-slate-700 h-screen w-screen p-4 flex flex-wrap gap-4 justify-center items-center'>
            <button onClick={handleAbout} className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                About
            </button>
                
            <button onClick={handleDashboard} className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Dashboard
            </button>   
        </div>
    </div>
  )
}

export default Home
