import { motion } from "framer-motion"
import { projects } from "../utils/helpers";

function Projects() {
  const myAnimation = {
    initial: { opacity: 0, x: -50 },
    inView: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeOut', delay: 0.15 } },
   };
  return (
    <motion.div initial='initial' whileInView='inView' viewport={{ once: true }} 
    variants={myAnimation} className="dark:text-white">
     
     <div className=" text-2xl  font-bold underline m-10">
        <h1>Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-10">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 dark:text-white">
            <img src={project.src} alt={project.title} className="w-full h-48 object-cover" />
            
            <div className="p-6">
              <h3 className="text-xl font-semibold ">{project.name}</h3>
              <p className=" my-4">{project.desc}</p>
              <div className="flex justify-between items-center">
                <a href={project.sourcecode} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Code
                </a>
           {
            project?.demo?.length > 0 ? <>
             <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Live Demo
                </a>
            </> : null
           }
               
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </motion.div>
  );
}

export default Projects;
