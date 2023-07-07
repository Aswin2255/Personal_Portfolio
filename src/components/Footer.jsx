import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-center">
      <ul className="flex gap-4 sm:gap-8">
        <a
          href="https://github.com/Aswin2255"
          target="__blank"
          className="text-gray-400  dark:bg-gray-900 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
        >
          <i className="text-xl sm:text-2xl md:text-3xl">
            <FiGithub />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/aswinkumar-ar-4b69161a5/"
          target="__blank"
          className="text-gray-400 dark:bg-gray-900 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
        >
          <i className="text-xl sm:text-2xl md:text-3xl">
            <FiLinkedin />
          </i>
        </a>
      </ul>
    </div>
  );
}

export default Footer;
