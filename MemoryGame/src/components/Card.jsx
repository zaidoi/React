import React from 'react'

function Card({key , pokImg,pokName}) {
  return (
    <div className='bg-blue-100 p-3 rounded-sm flex flex-col gap-2 w-70' key={key}>
       <img className='w-2xs object-cover h-75 rounded-sm' src={pokImg} alt="" /> 
        <h2 className='text-xl text-center bold'>{pokName}</h2>
    </div>
  )
}

export default Card