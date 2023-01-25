import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-blue-400 h-36 grid items-center">
        <div>
          <h1 className="font-bold font-serif text-6xl text-white text-center">
            About
          </h1>
        </div>
      </div>
      <div className="text-gray-400 mt-20 mx-2 lg:mx-60" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime reiciendis odit quae incidunt enim! Consectetur beatae ipsam nisi doloribus maiores similique blanditiis pariatur fugiat quae quam aperiam, eius inventore!
          Accusamus repellat nam autem recusandae accusantium quos aliquam atque expedita ut sint distinctio perferendis vero tenetur dicta quam, molestias labore sit, harum molestiae ipsam animi odit aspernatur quidem cumque. Assumenda.
      </div>

      <div className="mt-20 flex justify-evenly">
        <div>
            <h1 className="font-semibold text-3xl" >Event Covenors</h1>
        </div>
        <div className="flex space-x-4" >
            <div >
                <picture>
                    <img src="/f1.jpeg" alt="" className="rounded-full" />
                </picture>
                <h3 className="text-center mt-2 font-medium">CHOWDARY</h3>
            </div>

            <div>
                <picture>
                    <img src="/f2.jpeg" alt="" className="rounded-full" />
                </picture>
                <h3 className="text-center mt-2 font-medium">SHYAM</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
