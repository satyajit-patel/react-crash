import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <div className='bg-slate-400 flex flex-wrap gap-4 justify-center'>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/About'>About</Link>
            </div>
            <div>
                <Link to='/Dashboard'>Dashboard</Link>
            </div>
        </div>
    </div>
  )
}

export default Nav  