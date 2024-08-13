import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(15);
    // declaring variables using hooks as the variable is dynamic.. at one time ma change in 4 places
    // thats why it is React as it can Reacts in more places at same time
    
    const addVal = () => {
        count++;
        setCount(count);
    }

    const subVal = () => {
        count--;
        setCount(count);
    }

  return (
    <div>
        <h1>HI Batman</h1>
        <h1 className='text-center bg-yellow-500' >{count}</h1>
        <div>
            <button onClick={addVal} className='bg-green-500 padding p-2' >add value to {count}</button>
            <button onClick={subVal} className='bg-red-500 p-2' >sub val to {count}</button>
        </div>
    </div>
  )
}

export default Counter
