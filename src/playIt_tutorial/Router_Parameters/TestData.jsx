import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import NewPost from "./NewPost";
import { useSelector } from "react-redux";

const TestData = () => {
  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([])
  const myNewPost = useSelector(state => state.posts)
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/posts");
      const postData = await res.data;
      setPosts(postData);
      setNewPosts(myNewPost)
    };
    getPost();
    
  }, [myNewPost]);

  return (
    <>
      
      <div className="container mx-auto text-white">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        
        {newPosts.map((newPost) => (
          <NewPost key={newPost.id} newPost={newPost} />
        ))}
      </div>
    </>
  );
};

export default TestData;
