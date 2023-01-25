import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Forgot = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')

  

  const handleChange = async (e) => {
    // console.log(user,email);

    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
    else if (e.target.name == "cpassword") {
      setCpassword(e.target.value);
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  }



  

  return (
    <div>
      <div className="flex md:min-h-[80vh] min-h-[70vh] items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
          <h1 className="font-bold text-center font-serif  text-blue-500 text-3xl" >TEMPLATE</h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"}>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  Login
                </a>
              </Link>
            </p>
          </div>
           <div>
            <div>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px my-2 rounded-md shadow-sm">
              <div>
                <label for="password" className="sr-only">
                  New Password
                </label>
                <input
                onChange={handleChange}
                value={password}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="New Password"
                />
              </div>
             
            </div>
            <div className="-space-y-px my-2 rounded-md shadow-sm">
              <div>
                <label for="cpassword" className="sr-only">
                  Conform New Password
                </label>
                <input
                onChange={handleChange}
                value={cpassword}
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autocomplete="cpassword"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Conform Password"
                />
              </div>
             
            </div>

            

            <div>
              <button
             
               
                type="submit"
                className=" group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: mini/lock-closed --> */}
                  <svg
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
               Continue
              </button>
            </div>
            {password != cpassword  && <span className=" my-1 text-red-600 text-sm">
               Passwords do not match
            </span> }
            {password && password == cpassword  && <span className=" my-1 text-green-600 text-sm">
               Passwords match
            </span> }
           
          </div>
          </div> 


         <div>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px my-2 rounded-md shadow-sm">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                onChange={handleChange}
                value={email}
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
             
            </div>

            

            <div>
              <button
              
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: mini/lock-closed --> */}
                  <svg
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
               Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
