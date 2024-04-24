import React from 'react'
import { BsCreditCard2FrontFill } from "react-icons/bs";
const Libary = (prop) => {
    const {color,id}=prop
  return (
    <div className='libary-container'>
        <BsCreditCard2FrontFill fill={color} size={30}/>
        <h4>My Saved Libary {id}</h4>
        <p>dd-mm-yyy</p>
      
    </div>
  )
}

export default Libary
