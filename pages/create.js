import React from "react";

const Create = () => {
  return (
    <div className="mt-10 mx-20">
      <div className="bg-blue-400 h-36 grid items-center">
        <div>
          <h1 className="font-bold font-serif text-6xl text-white text-center">
            Create A New Event
          </h1>
        </div>
      </div>
      <div className="flex mt-4  space-x-4 ">
        <div class="relative w-1/2 mb-4">
          <label for="email" className="leading-7   text-xl text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="venue" className="leading-7 text-xl text-gray-600">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex mt-4  space-x-4 ">
        <div class="relative w-1/2 mb-4">
          <label for="start" className="leading-7   text-xl text-gray-600">
            Start Date
          </label>
          <input
            type="datetime-local"
            id="start"
            name="start"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="end" className="leading-7 text-xl text-gray-600">
            End Date
          </label>
          <input
            type="datetime-local"
            id="end"
            name="end"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex mt-4  space-x-4 ">
        <div class="relative w-1/2 mb-4">
          <label for="mode" className="leading-7   text-xl text-gray-600">
            Mode
          </label>
          <select
            name="mode"
            id="mode"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div class="relative w-1/2 mb-4">
          <label htmlFor="catg" className="leading-7 text-xl text-gray-600">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          >
            <option value="comp">Competition</option>
            <option value="web">Webinar</option>
            <option value="sem">Seminar</option>
            <option value="work">Workshop</option>
            <option value="meet">Meetups</option>
            <option value="fest">Fests</option>
          </select>
        </div>
      </div>
      <div className="flex mt-4  space-x-4 ">
        <div class="relative w-1/2 mb-4">
          <label for="prize" className="leading-7   text-xl text-gray-600">
            Prizes Info
          </label>
          <textarea
            rows={3}
            cols={21}
            id="prize"
            name="prize"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="contact" className="leading-7 text-xl text-gray-600">
            Contact Info
          </label>
          <textarea
            rows={3}
            
            id="contact"
            name="contact"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="w-fit mx-auto">
        <div className="text-white bg-blue-500 hover:bg-gray-400 rounded-md border py-2 px-4 cursor-pointer w-fit" >Submit</div>
      </div>
    </div>
  );
};

export default Create;
