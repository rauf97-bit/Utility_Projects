import React from "react";
import heroImg from "../../Images/c3.jpg";
// import { a } from 'react-router-dom'

const Hero = () => {
  const url = ["#", "#work", "#client", "#hire"];
  return (
    <div className="h-fit md:h-[100vh] mb-8 sm:mb-0">
      <main className="flex mt-3 flex-col sm:flex-row justify-center sm:justify-start">
        <div className="">
          <div className=" md:mr-24 lg:w-4 lg:h-[40vh] md:flex flex-col justify-evenly fixed hidden z-10">
            <a
              href={url[0]}
              className="nav-dot active:bg-green-500  focus:bg-green-500 w-6 h-6 p-[2px] px-[10px] rounded-2xl border-2 border-white"
            >
              <span className="absolute left-10 opacity-0 ">Home</span>
            </a>
            <a
              href={url[1]}
              className=" nav-dot active:bg-green-500  focus:bg-green-500 w-6 h-6 p-[2px] px-[10px] rounded-2xl border-2 border-white"
            >
              <span className="absolute left-10 opacity-0 ">Work</span>
            </a>
            <a
              href={url[2]}
              className=" nav-dot active:bg-green-500  focus:bg-green-500 w-6 h-6 p-[2px] px-[10px] rounded-2xl border-2 border-white"
            >
              <span className="absolute left-10 opacity-0 ">Client</span>
            </a>
            <a
              href={url[3]}
              className=" nav-dot active:bg-green-500  focus:bg-green-500 w-6 h-6 p-[2px] px-[10px] rounded-2xl border-2 border-white"
            >
              <span className="absolute left-10 opacity-0 ">Hire</span>
            </a>
          </div>
          <div className="md:ml-24">
            <h2 className="text-3xl sm:text-4xl sm:w-[33%] text-center sm:text-left md:text-6xl ">
              Building beautiful web experiences.
            </h2>
            <div className="mx-auto sm:mx-0 text-center sm:text-left">
              <button className="px-5 sm:px-10 py-2 rounded-xl my-4 sm:my-12 bg-green-500">
                My Work
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-fit flex sm:block justify-center items-center">
          <img src={heroImg} alt="Hero" srcset="" className="w-3/4 sm:w-full h-1/2 rounded-3xl sm:h-3/4 mt-12" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
