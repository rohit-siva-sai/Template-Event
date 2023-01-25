import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-16 ">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <a className="flex title-font font-medium items-center md:justify-start justify-around text-gray-900">
                <Image src="" alt="" width={300} height={50} />
              </a>
            </Link>

            {/* <p className="mt-2 text-sm  ml-3 text-gray-500 leading-4">
              TEMPLATE
            </p> */}
            <p className="font-bold font-serif ml-3 leading-5 mt-2  text-blue-500 text-3xl">
              TEMPLATE
            </p>
            <p className="mt-2 text-sm  ml-3 text-gray-500 leading-5">
              Event Management System
            </p>
          </div>
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Important Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/about">
                    <a className="text-gray-600 hover:text-gray-800">
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-gray-600 hover:text-gray-800">
                      Contact us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/accommodation"}>
                    <a className="text-gray-600 hover:text-gray-800">
                      Accommodation
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"https://raghuenggcollege.com/"}>
                    <a className="text-gray-600 hover:text-gray-800">
                      Explore Raghu
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/sitemap"}>
                    <a className="text-gray-600 hover:text-gray-800">Sitemap</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Address Info
              </h2>
              <nav className="list-none mb-10">
                <li>Address: Dakamarri,bheemli</li>
                <li>Visakhapatnam,Andhra Pradesh</li>
                <li>512112</li>
                <li>Email: template@gmail.com</li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Contact Links
              </h2>
              <nav className="list-none mb-10">
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </nav>
            </div>
          </div>
          <div className="flex flex-col  ">
            <div>
              <h1>Route Map</h1>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/Raghu+Engineering+College+(Autonomous)/@17.9936869,83.4119487,16.48z/data=!4m5!3m4!1s0x3a3be321dab3af81:0x98aea1e9cbd6aabc!8m2!3d17.9941882!4d83.41417"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MbRrwlP4MtsSXkIG-XBxvCnAQi5NuzQpqQ&usqp=CAU"
                    alt=""
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 template.com &nbsp;— &nbsp;All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
