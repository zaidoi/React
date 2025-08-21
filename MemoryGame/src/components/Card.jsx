import React from 'react'

function Card({key , pokImg,pokName,func}) {
  return (
    <div className='bg-black p-3 rounded-lg flex flex-col gap-2 w-70'onClick={func} key={key}>
       <img className='w-2xs object-cover h-75 rounded-sm' src={pokImg} alt="" /> 
        <h2 className='text-xl text-center bold text-white font-semibold'>{pokName}</h2>
    </div>
  )
}

export default Card