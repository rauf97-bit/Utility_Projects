import React, { useState } from "react";
import { Button } from "../containers/Button";

export const TopNavbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
    { name: "Login", path: "/" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    {!isOpen ? (
        <button className="top-6 md:hidden right-4 fixed text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : (
        <button className="fixed top-6 md:hidden  right-4 z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
      <nav className="top-0 shadow-md bg-indigo-600 p-4 text-white ">
        <div
          className={`container mx-auto flex flex-wrap items-center justify-between`}
        >
          <div className="text-3xl font-extrabold">Brand</div>
          <ul
            className={`flex flex-col md:flex-row absolute left-0 top-16 z-auto pb-3 md:pb-0 bg-indigo-600 w-full md:w-auto text-white md:static ease-in-out duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-[-500px]' } ` } >
            {links.map((link) => (
              <li key={link.name} className="mx-3 p-2 hover:opacity-50">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
            <Button>Get Started</Button>
          </ul>
        </div>
      </nav>
    </>
  );
};
