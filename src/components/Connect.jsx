import React from "react";
import { motion } from "framer-motion"

const ConnectSection = () => {
    const myAnimation = {
        initial: { opacity: 0, x: -50 },
        inView: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeOut', delay: 0.15 } },
       };
  return (
    <motion.div initial='initial' whileInView='inView' viewport={{ once: true }} 
    variants={myAnimation} className="dark:text-white">
      <div className=" text-2xl  font-bold underline m-10">
        <h1>Connect with Me</h1>
      </div>

      <div className="ml-10 mt-5 mb-5 mr-5 sm:m-10">
      <a href="https://www.linkedin.com/in/aswinkumar-ar-4b69161a5/" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
  >
    Linkedin
  </button>
</a>
<a href="https://github.com/Aswin2255" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
  >
    Github
  </button>
</a>
      </div>
    </motion.div>
  );
};

export default ConnectSection;
