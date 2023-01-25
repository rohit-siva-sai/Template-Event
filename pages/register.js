import React from "react";

const Register = () => {
  return (
    <div className="mt-10 mx-20">
        <div className="bg-blue-400 h-36 grid items-center">
        <div>
          <h1 className="font-bold font-serif text-6xl text-white text-center">
            Register
          </h1>
        </div>
      </div>
      <div className="flex mt-8  space-x-4 ">
        <div class="relative w-1/2 mb-4">
          <label for="name" className="leading-7   text-xl text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="email" className="leading-7 text-xl text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex mt-4  space-x-4 ">
        <div class="relative w-1/2 mb-4">
          <label for="name" className="leading-7   text-xl text-gray-600">
            College Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="email" className="leading-7 text-xl text-gray-600">
            Phone Number
          </label>
          <input
            type="number"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="w-fit mx-auto my-4" >
        <div className="text-white hover:bg-gray-400 bg-blue-500 px-4 py-2 rounded-md w-fit" >
            Submit
        </div>
      </div>
    </div>
  );
};

export default Register;
