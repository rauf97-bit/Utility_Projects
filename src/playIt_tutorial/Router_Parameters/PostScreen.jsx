import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Post from "./Post";

const PostScreen = () => {
  let params = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = () => {
     axios.get(`http://localhost:3000/posts/${params.id}`)
      .then(res => setPost(res.data))
      // setPost(res);
      // console.log(post)
    };
    getPost();
  },[params]);
  

  return (
    <>
      <Post post={post} />
    </>
  );
};

export default PostScreen;
