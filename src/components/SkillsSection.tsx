"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Box } from "lucide-react";

export function SkillsSection() {
  const customCategories = [
    {
      title: "Frontend",
      icon: <Layout size={32} strokeWidth={1.5} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend",
      icon: <Server size={32} strokeWidth={1.5} />,
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"]
    },
    {
      title: "Database",
      icon: <Database size={32} strokeWidth={1.5} />,
      skills: ["MongoDB", "PostgreSQL", "Prisma", "Redis"]
    },
    {
      title: "DevOps",
      icon: <Box size={32} strokeWidth={1.5} />,
      skills: ["Docker", "Git", "CI/CD", "Linux", "Grafana"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium tracking-wider uppercase text-sm mb-4 inline-block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Tools & Technologies
          </h2>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-colors z-10">
                <div className="flex flex-col gap-6 mb-8 border-b border-white/10 pb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-white tracking-tight">{category.title}</h3>
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                     <li key={i} className="flex flex-col gap-2 group/skill">
                       <div className="flex items-center justify-between text-sm font-medium text-muted-foreground transition-colors group-hover/skill:text-white">
                         <span>{skill}</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
                           className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
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
