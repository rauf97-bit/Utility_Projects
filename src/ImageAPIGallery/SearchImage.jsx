import React, { useRef } from "react";

const SearchImage = ({searchText}) => {
  const myRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    searchText(myRef.current.value)
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 py-1 leading-tight focus:outline-none "
            placeholder="Enter Search Input"
            ref={myRef}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 hover:border-teal-700 text-sm text-white py-1 px-2 rounded "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;
