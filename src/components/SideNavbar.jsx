import React, {useState} from "react";

export const SideNavbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button className="top-0 right-0 fixed" onClick={() => setIsOpen(!isOpen)}>
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
        <button className="fixed top-2 right-4 z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
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
        <nav className={`bg-gray-800 py-0 container text-white fixed top-0 right-0 w-[30vw] h-full ease-in-out duration-300 ${isOpen ? 'translaye-x-0' : 'translate-x-full'}`}>
          <ul className="">
            <li className="mx-2 p-2">Home</li>
            <li className="mx-2 p-2">Home</li>
            <li className="mx-2 p-2">Home</li>
            <li className="mx-2 p-2">Home</li>
          </ul>
        </nav>
    </>
  );
};
