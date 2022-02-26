import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const TestData = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/posts");
      const postData = await res.data;
      setPosts(postData);
    };
    getPost();
  }, []);

  return (
    <>
      
      <div className="container mx-auto">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default TestData;
