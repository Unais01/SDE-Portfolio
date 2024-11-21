// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-semibold"></p>
        <ul className="flex justify-center space-x-8 mb-4">
          <li>
            <a
              href="https://www.linkedin.com/in/unais-shaikh-42b111231/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-2xl" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Unais01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-2xl" />
              GitHub
            </a>
          </li>
          <li>
            <a
              // href="https://www.instagram.com/shaikh_unais_08"
              href="https://www.instagram.com/unais_shaikh_08/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2 text-2xl" />
              Instagram
            </a>
          </li>
        </ul>
        <p className="text-sm">&copy; 2024 Shaikh Unais. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
