import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/cw.jpg";

const Work = () => {
  return (
    <section className="h-fit py-2 ml-0 md:ml-8" id="work">
      <div className="intro mb-8">
        <div className="flex justify-center sm:justify-start">
          <div className="bg-green-500 px-4 py-1 rounded-lg w-10"></div>
        </div>
        <h3 className="text-3xl font-semibold my-2 text-center sm:text-left"> My Work</h3>
        <h5 className="text-gray my-1 text-center sm:text-left text-xl px-3 sm:px-0 ">
          I've had the the pleasure of working on quite a few project as a
          Frontend Developer
        </h5>
      </div>
      <div className="gallery justify-center items-center md:justify-start relative flex gap-x-2 gap-y-4 flex-wrap   my-2">
        <div className="col-span-1">
          <Link to={""}>
            <img
              src={img}
              className="w-auto h-[500px] rounded-lg mx-auto sm:mx-0"
              alt=""
            />

          </Link>
        </div>
        <div className="col-span-1">
          <Link to={""}>
            <img
              src={img}
              className=" w-auto h-[500px] rounded-lg  mx-auto sm:mx-0"
              alt=""
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link to={""}>
            <img
              src={img}
              className=" w-auto h-[500px] rounded-lg  mx-auto sm:mx-0"
              alt=""
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link to={""}>
            <img
              src={img}
              className=" w-auto h-[500px] rounded-lg  mx-auto sm:mx-0"
              alt=""
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link to={""}>
            <img
              src={img}
              className=" w-auto h-[500px] rounded-lg  mx-auto sm:mx-0"
              alt=""
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link to={""}>
            <img
              src={img}
              className=" w-auto h-[500px] rounded-lg  mx-auto sm:mx-0"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
