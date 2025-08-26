import React from 'react'
import { Link } from "react-router-dom";
function Spinach() {
  return (
    <>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <Link to="/profile">Click here to go back</Link>
    </>
  )
}

export default Spinach