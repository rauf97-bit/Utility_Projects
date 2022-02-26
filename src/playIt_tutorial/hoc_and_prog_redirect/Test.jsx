import React from "react";
import Hoc from "./Hoc";

const Test = () => {
  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-center text-9xl font-mono">Testing Doings</h1>
    </div>
  );
};

export default Hoc(Test);
