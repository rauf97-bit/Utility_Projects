import React from "react";
import { TopNavbar } from "../../components/TopNavbar";
import { SideNavbar } from "../../components/SideNavbar";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<TopNavbar />} />
        <Route path="/side" element={<SideNavbar />} />
      </Routes>
    </Router>
  );
};

export default Index;
