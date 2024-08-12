import React from 'react'
import './App.css'

import img from '../images/apple.png'

const App = () => {
  return (
    <div>
      <nav class="navbar">
          <div class="logo">
            <a href={img}>MyLogo</a>
          </div>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default App
