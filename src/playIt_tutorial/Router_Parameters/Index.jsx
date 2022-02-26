import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import PostScreen from "./PostScreen";
import TestData from "./TestData";

const Index = () => {
  return (
    <Router>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/' exact element={<TestData />} />
          <Route path="/posts/:id" element={<PostScreen />} />
      </Routes>
    </Router>
  );
};

export default Index;
