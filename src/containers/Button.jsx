import React from 'react'

export const Button = (props) => {
  return (
    <button className=' w-fit md:w-auto p-2 px-4 cursor-pointer bg-white text-indigo-600 hover:bg-indigo-400 hover:text-white rounded-md ease-in-out duration-150 mx-2.5'>{props.children}</button>
  )
}
