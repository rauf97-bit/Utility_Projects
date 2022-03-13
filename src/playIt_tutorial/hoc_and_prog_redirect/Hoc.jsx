import React from "react";

const Hoc = (WrappedComponents) => {
  const colors = [
    "green-500",
    "blue-500",
    "gray-400",
    "red-500",
    "white"
  ];
  const randomColor = colors[Math.floor(Math.random() * 5)];

  return (props) => {
    return (
      <div className={`bg-${randomColor}`}>
        <WrappedComponents {...props}/>
      </div>
    );
  };
};

export default Hoc;
