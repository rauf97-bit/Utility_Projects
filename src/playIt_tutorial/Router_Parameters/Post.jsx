import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return (
    <div className="text-white my-3 mx-auto w-[70vw] rounded-lg outline outline-1 outline-slate-800 shadow-md p-4 text-center">
      <Link to={`/posts/${post.id}`}>
        <h2 className="text-4xl my-4">{post.title}</h2>
        <h4 className="text-2xl">{post.body}</h4>
      </Link>
    </div>
  );
};

export default Post;
