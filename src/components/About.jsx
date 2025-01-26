import { motion } from "framer-motion"
function About() {
  const myAnimation = {
    initial: { opacity: 0, x: -50 },
    inView: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeOut', delay: 0.15 } },
   };
  return (
    <motion.div
    initial='initial' whileInView='inView' viewport={{ once: true }} 
    variants={myAnimation} 
     className="dark:text-white ">
      <div className=" text-2xl  font-bold underline m-10">
        <h1>About</h1>
      </div>
      <div className=" text-2xl m-10 ">
        <h1>Hi, I am</h1>
      </div>
      <div className="font-bold text-3xl m-10 ">
        <h1>Aswinkumar AR</h1>
      </div>

      <div className="text-xl ml-10 mt-5 mb-5 mr-5 sm:m-10 leading-relaxed">
        <p>
          Experienced software developer with hands-on experience designing,
          building, and deploying scalable web applications. Proficient in
          <strong> JavaScript</strong>, <strong>React</strong>,{" "}
          <strong>Node.js</strong>,<strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>, with a strong understanding of front-end and
          back-end development.
        </p>
        <p className="mt-4">
          Skilled at implementing responsive designs, RESTful APIs, and creating
          user-friendly interfaces.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
