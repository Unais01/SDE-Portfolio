// Header.js
import React from "react";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <header className="w-full bg-white p-6 mt-2">
      {/* Logo and Navigation */}
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <div className="text-4xl font-bold text-purple-600">
          {/* Logo Placeholder */}
          <span className=" flex items-center justify-center rounded-full  text-white ">
            <img src={logo} alt="logo" className=" w-[45px] md:w-[60px]" />
          </span>
        </div>
        <div className="flex items-center space-x-6 text-2xl">
          {/* <a href="#mentorship" className="text-gray-600 hover:text-gray-800">
            Mentorship
          </a> */}
          <a
          target="_blank"
            href="https://drive.google.com/file/d/1paSowhMT6_bgniD4_ipPzhrL0huCuyNK/view?usp=sharing"
            className="px-3 md:px-5 text-xl md:text-xl  py-1 md:py-2 border-[1px] md:border-[3px] border-primaryColor text-primaryColor rounded-full hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out tracking-wider"
          >
            RESUME
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
