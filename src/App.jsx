import React from "react";
import Hero from "./component/Hero";
import Header from "./component/Header";
import About from "./component/About";
import { projects } from "../data";
import ProjectCard from "./component/Projects";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
      </div>
      <About />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-Primary uppercase tracking-wider font-bold text-center mb-8">My Projects</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
