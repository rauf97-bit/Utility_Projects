import NewPost from "./NewPost";
import React, { Component } from "react";
import { connect } from "react-redux";

class NewPostScrn extends Component {
  render() {
    // console.log(this.props)
    const { newPosts } = this.props;
    // console.log(newPosts);
    // const filteredPost = newPosts.filter((post) => post.id === parseInt(params.id));
    // function getPost() {
    //   setNewPost(filteredPost[0]);
    // }
    return (
      <>
        <NewPost newPost={newPosts} />
      </>
      // <div>Hello</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { newPosts: state.posts };
};
// const mapDispatchToProps = {}

export default connect(mapStateToProps)(NewPostScrn);

// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
//  const Newpost = () => {
//   const params = useParams();
// const post_ = useSelector((state) => state.posts);
// const filteredPost = post_.filter((post) => post.id === parseInt(params.id));
// const [newPost, setNewPost] = useState([]);
// function getPost() {
//   setNewPost(filteredPost[0]);
// }
//   // useEffect(() => {
//   //   getPost()
//   // }, [params]);

//   return (
//     <>
//       <NewPost newPost={newPost} />
//     </>
//   );
// };
