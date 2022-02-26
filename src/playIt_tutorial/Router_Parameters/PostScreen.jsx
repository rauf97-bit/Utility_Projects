import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const PostScreen = () => {
  let params = useParams();
  const [post, setPost] = useState({});
  console.log(params)
  useEffect(() => {
    const getPost = () => {
     axios.get(`http://localhost:3000/posts/${params.id}`)
      .then(res => setPost(res.data))
      // setPost(res);
      console.log(post)
    };
    getPost();
  },[params]);

  return (
    <div className=" my-3 mt-10 mx-auto w-[85vw] rounded-lg outline outline-1 outline-slate-800 shadow-md p-4 text-center">
      <h2 className="text-4xl my-4">{post.title}</h2>
      <h4 className="text-2xl">{post.body}</h4>
    </div>
  );
};

export default PostScreen;
