import React from 'react'

const Card = ({name, desc="nothing to say so far"}) => {
  return (
    
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://i.pinimg.com/originals/a4/f5/c4/a4f5c420465ce8568e007f056828d48e.jpg"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {desc}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>

    
  )
}

export default Card
