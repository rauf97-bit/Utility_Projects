import React from "react";
import fb from "../../Images/icon-facebook.svg";
import twt from "../../Images/icon-twitter.svg";
import ig from "../../Images/icon-instagram.svg";

const Hire = () => {
  return (
    <section id="hire" className="ml-0 md:ml-8">
      <div className="intro mb-8">
        <div className="flex justify-center sm:justify-start">
          <div className="bg-green-500 px-4 py-1 rounded-lg w-10"></div>
        </div>
        <h3 className="text-3xl font-semibold my-2 text-center sm:text-left">
          Hire Me
        </h3>
        <h5 className="text-gray my-1 text-center sm:text-left text-xl px-3 sm:px-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-2 mx-5 sm:mx-0">
        <form action="" method="post" className="col-span-1 ">
          <div className="flex flex-col ">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              className="p-3 rounded-md bg-gray-700"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              className="p-3 rounded-md bg-gray-700"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              name=""
              className="p-3 rounded-md bg-gray-700"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
        <div className="social col-span-1 relative">
          <div className="mt-2 mb-4 sm:mb-10 sm:mt-5">
            <p className="my-2 text-gray-500">+234 703 222 3157</p>
            <a href="mailto:raufisa37@gmail.com">raufisa37@gmail.com</a>
          </div>
          <div className="flex justify-between w-1/2 sm:w-1/4 pb-5">
            <img src={fb} alt="fb" className="cursor-pointer p-2" />
            <img src={twt} alt="twt" className="cursor-pointer p-2" />
            <img src={ig} alt="ig" className="cursor-pointer p-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
