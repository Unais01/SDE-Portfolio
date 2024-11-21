import React from "react";
import tech from "../assets/images/tech.svg";

const Cards = ({ skills = [], title }) => {
  return (
    <>
      <div className="bg-white text-gray-900 rounded-lg p-8 text-center shadow-lg shadow-gray-500/30 h-full ">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-400 p-4 rounded-full">
            <img
              src={tech}
              alt="Designer Icon"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </div>
        <h3 className=" text-2xl  font-fontPrimary font-bold uppercase tracking-wider underline decoration-2 underline-offset-4">
          {title}
        </h3>

        <div className="mt-3">
          {skills.map((skill, idx) => (
            <p key={idx} className=" mt-2 text-xl   font-fontPrimary">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
