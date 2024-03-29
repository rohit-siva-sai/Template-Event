import Head from "next/head";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Template </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/trojanlogo.jpg" />
      </Head>

      <div className="" >
        <picture>
          <img src="/event1.jpg" alt="" className="h-3/4 lg:h-[600px] w-full"  />
        </picture>
      </div>

      <div className="mt-20 mx-2 flex justify-around items-center " >
        <div>
          <h1 className="font-mono font-bold text-6xl" >Our Top Sponcers</h1>
        </div>
        <div className="flex space-x-5">
          <picture>
            <img src="/amazon.png" alt="" />
          </picture>
          <picture>
            <img src="/flipkart.jpeg" alt="" />
          </picture>
        </div>
       
      </div>
      <div className="mt-20 mx-2 flex justify-around items-center " >
        <div>
          <h1 className="font-mono font-bold text-6xl">Our Community Sponcers</h1>
        </div>
        <div className="flex ">
          <picture>
            <img src="/raghu.jpeg" alt="" />
          </picture>
          
        </div>
       
      </div>

      
      
      
      
      
    </div>
  );
}
