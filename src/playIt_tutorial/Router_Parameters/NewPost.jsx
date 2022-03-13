import React from 'react'
import { Link } from 'react-router-dom'

const NewPost = ({newPost}) => {
  return (
    <div className="bg-white text-black my-3 mx-auto w-[70vw] rounded-lg outline outline-1 outline-slate-800 shadow-md p-4 text-center">
      <Link to={`/posts/${newPost.id}`}>
        <h2 className="text-4xl my-4">{newPost.title}</h2>
        <h4 className="text-2xl">{newPost.body}</h4>
      </Link>
    </div>
  )
}

export default NewPost