import React from 'react'

function GameOver({func}) {
  return (
    <div
        className="absolute inset-0 m-auto w-80 h-24 bg-yellow-600 p-5 
                flex items-center justify-evenly rounded-lg shadow-xl border-4 border-black"
      >
        <p className="text-lg font-extrabold text-black drop-shadow">
          Game Over
        </p>
        <button
          className="bg-black text-yellow-400 font-semibold px-4 py-2 rounded-lg 
                     hover:bg-gray-800 transition"
        onClick={func} >
          Play Again
        </button>
      </div>
  )
}

export default GameOver