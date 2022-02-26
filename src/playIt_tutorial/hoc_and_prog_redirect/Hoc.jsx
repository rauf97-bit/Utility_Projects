import React from "react";

const Hoc = (WrappedComponents) => {
  const colors = [
    "red-500",
    "green-500",
    "blue-500",
    "yellow-500",
    "purple-500",
    "brown-500",
    "pink-500",
  ];
  const randomColor = colors[Math.floor(Math.random() * 7)];

  return (props) => {
    return (
      <div className={`text-${randomColor}`}>
        <WrappedComponents {...props}/>
      </div>
    );
  };
};

export default Hoc;
