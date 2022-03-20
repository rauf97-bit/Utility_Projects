import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { deleteItem } from '../Redux_intro/RootReducer'

const NewPost = ({newPost}) => {
  console.log(this.props)
  const dispatch = useDispatch()
  let param = useParams()
    
  const handleClick = () => {
    // let id = parseInt(param)
    // return{
    //   deletePost : (id) => {dispatch({type : "DELETE_POST", postId : id})}
    // }  
  }
  return (
    <div className="bg-white text-black my-3 mx-auto w-[70vw] rounded-lg outline outline-1 outline-slate-800 shadow-md p-4 text-center">
      <Link to={`/posts/${newPost.id}`}>
        <h2 className="text-4xl my-4">{newPost.title}</h2>
        <h4 className="text-2xl">{newPost.body}</h4>
        <div className="mx-auto">
          <button onClick={handleClick} className='p-2 px-4 my-4 rounded-md bg-gray-600 text-white'>Delete</button>
        </div>
      </Link>
    </div>
  )
}

export default NewPost