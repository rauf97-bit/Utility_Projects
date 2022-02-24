import React from 'react'

const ImageCard = ({image}) => {
  // console.log(image)
  const tags = image.tags.split(',')
  return (
    <div className='shadow-md rounded-xl pb-3'>
      <img src={image.largeImageURL} alt=""  className='w-full h-52 ' />
      <div className="p-3">
        <h3 className="text-2xl py-1 text-purple-500">Photo by {image.user}</h3>
        <p className="texl-2xl">Views : {image.views}</p>
        <p className="texl-2xl">Downloads : {image.downloads}</p>
        <p className="texl-2xl">Likes : {image.likes}</p>
      </div>
      <ul className='grid grid-cols-3 w-3/4 '>
      {
         
        tags.map((tag, index) => (
          <li key={index} className="mx-2 rounded-md max-w-fit text-sm px-2 bg-gray-400">#{tag}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ImageCard