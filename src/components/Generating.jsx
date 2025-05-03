import React from 'react'
import { loading } from '../assets'

const Generating = ({className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-stone-800/80 rounded-[1.7rem] ${className || " "}
    text-base`}>
        <img src={loading} className='h-5 w-5 mr-4' alt="" />
        AI is Generating
    </div>
  )
}

export default Generating