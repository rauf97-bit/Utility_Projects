import React from "react";
import { TopNavbar } from "../components/TopNavbar";
import Client from "./components/Client";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import Work from "./components/Work";
const Home = () => {

  return (
    <div className='bg-black text-white'>
      <TopNavbar color={"bg-black"} />
      <div className="container mx-auto">
        <Hero />
        <Work />
        <Client />
        <Hire />
      </div>
    </div>
  );
};

export default Home;
