import React from "react";
import NewPost from "./NewPost";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewPostScrn = () => {
  const params = useParams();  
  const post_ = useSelector((state) => state.posts);
  const filteredPost = post_.filter((post) => post.id == params.id);
  const [newPost, setNewPost] = useState([]);
  function getPost() {
    console.log(filteredPost);
    setNewPost(filteredPost[0]);
  }
  useEffect(() => {
    getPost()
  }, [params]);

  console.log();
  return (
    <>
      <NewPost newPost={newPost} />
    </>
  );
};

export default NewPostScrn;
