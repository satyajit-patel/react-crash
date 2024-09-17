import React from 'react'
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Dashboard from './components/Dashboard';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Nav />
      <Home />
    </div> 
  },
  {
    path: "/About",
    element: <div>
      <Nav />
      <About />
    </div> 
  },
  {
    path: "/Dashboard",
    element: <div>
      <Nav />
      <Dashboard />
    </div> 
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
