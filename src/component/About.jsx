// About.js
import React from "react";
import tech from "../assets/images/tech.svg";
import data from "../../data";
import Cards from "./Cards";

const About = () => {
  return (
    <div>
      {/* Main Section */}
      <section className="bg-primaryColor text-white text-center py-20 px-8 pb-32 relative">
        {/* Main About Text */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 font-Primary tracking-widest">
            Hi, I'm Unais. Nice to meet you.
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed font-fontPrimary tracking-wider">
            Since starting my journey as a computer engineering student and
            aspiring developer, I’ve immersed myself in creating practical
            solutions and refining my skills. I’ve built projects that connect
            people, collaborated on meaningful applications, and continually
            seek to learn and grow. I’m a problem-solver at heart, genuinely
            curious, and always working to push my capabilities to the next
            level.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8   md:max-w-6xl mx-auto md:-mt-20 relative z-10">
        <Cards skills={data.skills.programming} title="Programming" />
        <Cards skills={data.skills.technology} title="Technologies" />
        <Cards skills={data.skills.tools} title="Tools" />
      </div>
    </div>
  );
};

export default About;
