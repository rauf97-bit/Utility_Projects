import React from "react";
import { Button } from "../containers/Button";
import Background from "./Background";
import img from "./demo.jpg";

const Modal = ({ setIsOpen, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <Background>
          <div className={` ease-in-out duration-300 transition ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-10 w-[50vw] mx-auto text-3xl grid grid-cols-2 bg-white h-max shadow-lg rounded-md`}>
            <div className="col-span-1 back">
              <img src={img} className="h-full w-max" alt="N" />
            </div>
            <div className="col-span-1 p-5 flex flex-col justify-around items-center relative">
              <div
                className=" absolute top-4 right-5 text-5xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                X
              </div>
              <div className="mx-auto flex justify-center items-center flex-col bg-blue-400 p-6">
                <div className="text-3xl text-center mb-6">Testing Modal</div>
                <Button>
                  <span className="text-3xl text-black my-2 ">Try It</span>
                </Button>
              </div>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
