import React from 'react'

const Btn = () => {
  return (

    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>
    </div>
    
  )
}

export default Btn