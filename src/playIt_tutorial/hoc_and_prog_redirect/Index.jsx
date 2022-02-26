import React from "react";
import  Home  from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default Index;
