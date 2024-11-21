import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-48 object-cover"
        src={project.imageUrl}
        alt={project.altText}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
        <p className="text-gray-700 text-base">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 font-bold hover:text-blue-700 transition duration-300 ease-in-out"
        >
          Visit Project
        </a>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default ProjectCard;
