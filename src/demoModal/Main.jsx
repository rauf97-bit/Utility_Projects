import React, { useState } from "react";
import { Button } from "../containers/Button";
import Modal from "./Modal";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    // console.log('Working Fine')
  };
  return (
    <>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="bg-blue-400 h-[100vh] flex justify-center items-center">
        <Button>
          <span onClick={handleClick} className="text-black text-3xl">
            Display Modal
          </span>
        </Button>
      </div>
    </>
  );
};

export default Main;
