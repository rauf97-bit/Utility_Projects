import React, {useRef} from 'react'

const User = ({setUser}) => {
  // const [username, setUsername] = useState('')
  const inputName = useRef()

  const handleClick = () => {
    setUser(inputName.current.value)
  }
  return (
    <div className="flex bg-gradient-to-b from-indigo-900 to-black items-center justify-center  h-[100vh] w-[100vw]">
          <div className="text-3xl flex flex-col ">
            <input ref={inputName} type="text" className="focus:border-none focus:outline-none p-2 rounded-md m-1 w-96" />
            <button className="p-2 m-1 w-96 bg-white  rounded-md" onClick={handleClick}>Submit</button>
          </div>
        </div>
  )
}

export default User