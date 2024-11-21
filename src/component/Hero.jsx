import React from "react";
import avatar from "../assets/images/avatar.svg";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center  bg-white text-center p-6 ">
        {/* Hero Content */}
        <div className="mt-3 md:mt-20 flex flex-col items-center justify-center">
          <h1 className="font-Primary text-4xl md:text-5xl font-bold text-gray-900 tracking-wider">
            Programmer, Frontend Developer & Student
          </h1>
          <p className="text-xl md:text-2xl text-gray-900  md:text-gray-600 mt-6 font-fontPrimary md:font-fontSecondary tracking-wider">
            I design and code beautifully simple things, and I love what I do.
          </p>
          {/* Avatar Image */}
          <div className="mt-3">
            <img
              src={avatar}
              // Replace this with your avatar image URL
              alt="Profile"
              className="w-60 h-60 rounded-full md:w-[250px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
