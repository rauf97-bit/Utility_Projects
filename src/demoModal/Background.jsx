import React from 'react'

const Background = (props) => {
  
  return (
    <div className={` h-[100vh] w-[100vw] bg-gray-500 opacity-80 fl ex fixed justify-center items-center`}>
      {props.children}
    </div>
  )
}

export default Background