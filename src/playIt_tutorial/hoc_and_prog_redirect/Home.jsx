import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TopNavbar } from "../../components/TopNavbar";

// Programmatic Redirect using SetTimeout Fxn
const Home = () => {
  let navi = useNavigate();
  console.log(navi);
  useEffect(() => {
    setTimeout(() => {
      navi("/test", { replace: true });
    }, 2000);
  });
  return (
    <>
      <TopNavbar />
      <div className="container mx-auto mt-24">
        <h1 className="text-center text-9xl font-mono text-gray-300">
          Welcome
        </h1>
      </div>
    </>
  );
};

export default Home;
