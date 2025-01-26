import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../utils/helpers";
const ExperienceSection = () => {
  const myAnimation = {
    initial: { opacity: 0, x: -50 },
    inView: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.15 },
    },
  };
 

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={myAnimation}
      className="dark:text-white"
    >
      <div className=" text-2xl  font-bold underline m-10">
        <h1>Experience</h1>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ml-10 mt-5 mb-5 mr-5 sm:m-10 dark:text-white"
          >
            <h3 className="text-xl font-semibold dark:text-white">
              {exp.title}
            </h3>
            <p className="text-gray-500 dark:text-white">{exp.company}</p>
            <p className="text-sm text-gray-400 dark:text-white">
              {exp.duration}
            </p>
            {
                exp.description.map((desc, index) => (
                    <ul className="list-disc ml-5">
                        <li key={index} className="text-gray-700 mt-4 dark:text-white">
                            {desc}
                        </li>
                    </ul>
                  
                ))
            }
           
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
