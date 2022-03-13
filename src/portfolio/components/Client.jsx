import React from "react";
import img from "../../Images/c1.jpg";
const Client = () => {
  return (
    <section className="py-2 ml-0 md:ml-8" id="client">
      <div className="intro mb-8">
        <div className="flex justify-center sm:justify-start">
          <div className="bg-green-500 px-4 py-1 rounded-lg w-10"></div>
        </div>
        <h3 className="text-3xl font-semibold my-2 text-center sm:text-left">
          My Client
        </h3>
        <h5 className="text-gray my-1 text-center sm:text-left text-xl px-3 sm:px-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi
          illo natus minus, at quam inventore omnis ex architecto ab!
        </h5>
      </div>

      <div className="mx-4 md:mx-0 my-2 p-3 rounded-lg bg-gray-800 shadow-2xl ">
        <div className="md:grid grid-cols-5 flex flex-col items-center gap-2 ">
          <img
            src={img}
            alt=""
            className="col-span-1 rounded-[100px] h-[200px] w-[200px]"
          />
          <div className="flex flex-col justify-evenly col-span-4">
            <div className="ml-0 sm:ml-10 text-center sm:text-left">
              <h5 className="text-xl font-semibold">Apple Inc</h5>
              <div className="flex flex-col mt-2">
                <div className="flex my-2">
                  <div className="bg-gray-900 p-2 mr-2 rounded-sm">UI/UX</div>
                  <div className="bg-gray-900 p-2 rounded-sm">
                    Frontend Development
                  </div>
                </div>
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  voluptates?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0 my-2 p-3 rounded-lg bg-gray-800 shadow-2xl ">
        <div className="md:grid grid-cols-5 flex flex-col items-center gap-2 ">
          <img
            src={img}
            alt=""
            className="col-span-1 rounded-[100px] h-[200px] w-[200px]"
          />
          <div className="flex flex-col justify-evenly col-span-4">
            <div className="ml-0 sm:ml-10 text-center sm:text-left">
              <h5 className="text-xl font-semibold">Apple Inc</h5>
              <div className="flex flex-col mt-2">
                <div className="flex my-2">
                  <div className="bg-gray-900 p-2 mr-2 rounded-sm">UI/UX</div>
                  <div className="bg-gray-900 p-2 rounded-sm">
                    Frontend Development
                  </div>
                </div>
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  voluptates?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0 my-2 p-3 rounded-lg bg-gray-800 shadow-2xl ">
        <div className="md:grid grid-cols-5 flex flex-col items-center gap-2 ">
          <img
            src={img}
            alt=""
            className="col-span-1 rounded-[100px] h-[200px] w-[200px]"
          />
          <div className="flex flex-col justify-evenly col-span-4">
            <div className="ml-0 sm:ml-10 text-center sm:text-left">
              <h5 className="text-xl font-semibold">Apple Inc</h5>
              <div className="flex flex-col mt-2">
                <div className="flex my-2">
                  <div className="bg-gray-900 p-2 mr-2 rounded-sm">UI/UX</div>
                  <div className="bg-gray-900 p-2 rounded-sm">
                    Frontend Development
                  </div>
                </div>
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  voluptates?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0 my-2 p-3 rounded-lg bg-gray-800 shadow-2xl ">
        <div className="md:grid grid-cols-5 flex flex-col items-center gap-2 ">
          <img
            src={img}
            alt=""
            className="col-span-1 rounded-[100px] h-[200px] w-[200px]"
          />
          <div className="flex flex-col justify-evenly col-span-4">
            <div className="ml-0 sm:ml-10 text-center sm:text-left">
              <h5 className="text-xl font-semibold">Apple Inc</h5>
              <div className="flex flex-col mt-2">
                <div className="flex my-2">
                  <div className="bg-gray-900 p-2 mr-2 rounded-sm">UI/UX</div>
                  <div className="bg-gray-900 p-2 rounded-sm">
                    Frontend Development
                  </div>
                </div>
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  voluptates?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
