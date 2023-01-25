import Link from "next/link";
import { events } from "../data/events";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

const Event = ({ products }) => {
  return (
    <div>
      <style jsx>
        {`
          .scroll1 {
            background-image: url("/scroll1.webp");
          }
          .scroll2 {
            background-image: url("/scroll2.jpg");
          }
          .scroll3 {
            background-image: url("/scroll3.webp");
          }
          .scroll4 {
            background-image: url("/scroll4.webp");
          }
          .scroll5 {
            background-image: url("/scroll5.webp");
          }
          .scroll6 {
            background-image: url("/scroll10.webp");
          }
        `}
      </style>
      <Splide>
        <SplideSlide>
          <div className="scroll1 md:h-[530px] h-52 bg-clip-padding  md:bg-contain bg-contain md:scale-y-100 scale-y-175 bg-no-repeat bg-center flex justify-center ">
            <div className="self-center w-12 md:text-6xl text-2xl text-center text-red-500 font-bold font-serif  md:min-w-max  animate-bounce md:h-36 md:mr-8 mr-3 h-16 md:mt-0 mt-8">
              TEMPLATE
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll2 md:h-[530px] h-52 bg-clip-padding bg-contain md:scale-y-125 scale-y-175 bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll3 md:h-[530px]  h-52 bg-clip-padding  bg-contain  md:scale-y-100 scale-y-125  bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll4 md:h-[530px] h-52 bg-clip-padding   bg-conatin  bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll5 md:h-[530px] h-52 bg-clip-padding  md:bg-contain bg-contain md:scale-y-100 scale-y-175  bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll6 md:h-[530px] h-52 bg-clip-padding  bg-cover  bg-no-repeat bg-center"></div>
        </SplideSlide>
      </Splide>
      <section className="text-gray-600 body-font  min-h-[80vh]">
        <div className="container lg:px-24 py-12 mx-auto ">
          <div className="flex flex-wrap -m-4 justify-center">
            {products &&
              Object.keys(products).map((item) => {
                return (
                  <Link
                    passHref={true}
                    href={`/difevents/${products[item].slug}`}
                    key={products[item].slug}
                  >
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md lg:mx-6 lg:my-2 cursor-pointer">
                      <a className="block relative transition duration-700 ease-in-out hover:scale-110 scroll-smooth rounded overflow-hidden">
                        <picture>
                          <img
                            alt="ecommerce"
                            className="md:h-[40vh] block h-[32vh] m-auto"
                            src={products[item].img}
                          />
                        </picture>
                      </a>
                      <div className="mt-4 text-center">
                        <h1 className="text-gray-500 font-semiblod text-lg tracking-widest title-font mb-1 ">
                          {products[item].category}
                        </h1>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      <div className="w-fit mx-auto">
        <Link href={"/create"}>
          <a href="#">
            <div className="text-white bg-blue-500 hover:bg-gray-400 p-2 rounded-md w-fit">
              Create an Event
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: { products: events }, // will be passed to the page component as props
  };
}

export default Event;
