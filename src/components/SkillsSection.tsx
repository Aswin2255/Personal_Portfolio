"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Box } from "lucide-react";

export function SkillsSection() {
  const customCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Vite", "TanStack Query"]
    },
    {
      title: "Backend",
      icon: <Server className="text-green-400" size={24} />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Microservices"]
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"]
    },
    {
      title: "DevOps & Tools",
      icon: <Box className="text-amber-400" size={24} />,
      skills: ["Docker", "Redis", "Git", "CI/CD", "Linux", "Lighthouse", "Microsoft Clarity", "Grafana"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Modern tools and technologies I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl h-full backdrop-blur-sm relative overflow-hidden group-hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                     <li key={i}>
                       <div className="text-sm font-medium text-zinc-300 mb-1 flex justify-between group-hover:text-white transition-colors">
                         <span>{skill}</span>
                       </div>
                       
                       {/* Animated progress bar line */}
                       <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                           className={`h-full rounded-full opacity-60 group-hover:opacity-100 ${
                             category.title === "Frontend" ? "bg-blue-400" :
                             category.title === "Backend" ? "bg-green-400" :
                             category.title === "Database" ? "bg-purple-400" :
                             "bg-amber-400"
                           }`}
                         ></motion.div>
                       </div>
                     </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
