import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default Main;
