import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { events } from "../../data/events";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = events.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = events.filter((p) => p.slug === params.slug);
  console.log(product);

  return {
    props: { product: product[0] },
  };
}

const Post = ({ addToCart, product, buyNow }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-[85vh] lg:ml-32">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <picture>
              <img
                class="lg:w-full md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg"
                alt="hero"
                src={product.img}
              />
            </picture>
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {product.title}
              </h1>
              <p class="title-font sm:text-lg text-sm mb-4 font-medium text-gray-900">
                {product.date}
              </p>
              <p class="title-font sm:text-lg text-sm mb-4 font-medium text-gray-900">
                {product.Venue}
              </p>
              <p class="mb-8 leading-relaxed">{product.desc}</p>
              <p class="mb-8 leading-relaxed">mode: {product.mode}</p>
              <p class="mb-8 leading-relaxed">Contact- {product.contact}</p>
              <Link href="/register">
                <a href="#">
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Register
                    </button>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Post;
