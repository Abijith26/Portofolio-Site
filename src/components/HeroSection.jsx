import React from "react";

const projects = [
  {
    name: "Food Site",
  },
  {
    name: "Food Site",
  },
  {
    name: "Food Site",
  },
  {
    name: "Food Site",
  },
];

function HeroSection() {
  return (
    <section className="grid grid-cols-5 h-[calc(100vh-4.5rem)]">
      <div className="col-span-3 justify-center items-center flex">
        <p className="nameText text-white md:text-6xl lg:text-8xl text-center">
          I'm Abijith Murugan.
        </p>
      </div>
      <div className="col-span-2 justify-center items-center flex">
        <div className="flex flex-col gap-3 w-[60%]">
          <span className="text-gray-700 text-lg uppercase font-[600]">
            projects
          </span>
          {projects.map((item) => (
            <span className=" text-gray-800 hover:text-pink-600 text-xl font-[600] hover:cursor-pointer border-b-[3px] border-gray-500 py-2 transition-all ease-in hover:border-gray-800">
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
