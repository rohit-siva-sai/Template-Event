import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

// const Navbar = ({cart, addToCart,removeFromCart,clearCart,subtotal}) =>{

// }
const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const router = useRouter();

  useEffect(() => {
    let exempted = ["/checkout", "/order", "/orders", "/myaccount"];
    if (exempted.includes(router.pathname)) {
      setSidebar(false);
    }
  }, [router]);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row md:justify-start items-center py-2 shadow-lg sticky top-0 bg-white z-10
        }`}
      >
        <div className="logo mr-auto md:mx-8  ml-2">
          {/* <img src="/logo.webp" alt="" className="h-12"/> */}
          <Link href="/">
            <a>
              {" "}
              {/* <Image src="" alt="" width={200} height={40} /> */}
            <h1 className="font-bold font-serif hover:underline text-blue-500 text-3xl" >TEMPLATE</h1>
            </a>
          </Link>
        </div>
        <div className="nav">
          <ul className="flex md:space-x-10 items-center font-bold space-x-6 md:text-lg  bg-slate-300 p-2 md:bg-white md:p-0">
            <Link href="/">
              <a className="hover:text-blue-600">
                <li>Home</li>
              </a>
            </Link>
            <Link href="/about">
              <a className="hover:text-blue-600">
                <li>About</li>
              </a>
            </Link>
            <Link href="/event">
              <a className="hover:text-blue-600">
                <li>Events</li>
              </a>
            </Link>
            <Link href="/accommodation">
              <a className="hover:text-blue-600">
                <li>Accomodation</li>
              </a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-blue-600">
                <li>Contact</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="cart absolute mx-5 right-0  font-bold  top-4 cursor-pointer flex space-x-2 md:space-x-4">
          <Link href="/admin">
            <a>
              <button className="bg-blue-600 px-2 lg:py-2 py-1 ease-in-out  rounded-md text-sm text-white">
                Admin
              </button>
            </a>
          </Link>

          {/* {!user.value && ( */}
            <Link href="/login">
              <a href="#">
                <button className="bg-blue-600 px-2 lg:py-2 py-1 ease-in-out  rounded-md text-sm text-white">
                  login
                </button>
              </a>
            </Link>
          {/* )} */}
          {/* {user.value && <MdAccountCircle className="text-3xl ease-in-out" />} */}
          {/* <span
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            
            
          </span> */}
        </div>
      </div>
    </>
  );
};
export default Navbar;
