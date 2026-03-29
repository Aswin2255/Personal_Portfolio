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
      skills: ["Docker", "Redis", "Git", "CI/CD", "Linux", "Grafana"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background border-b-2 border-border">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div className="flex flex-col">
             <span className="text-accent font-mono text-xs tracking-[0.2em] mb-4 uppercase inline-block border border-accent/30 px-2 py-1 bg-accent/10 w-fit">
               [ 03 ] TECHNICAL COMPREHENSION
             </span>
             <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter mix-blend-difference">
               Skills.
             </h2>
          </div>
          <div className="text-right pb-2 border-b-2 border-border hidden md:block">
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest max-w-xs">
              MODERN TOOLS & TECHNOLOGIES. RUNNING SYSTEMS AT SCALE.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-2 border-border bg-card p-6 flex flex-col hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all z-10"
            >
              <div className="flex flex-col gap-4 mb-8 border-b-2 border-border pb-6">
                <div className="p-4 border-2 border-border bg-background self-start group-hover:bg-accent group-hover:text-black transition-colors w-16 h-16 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">{category.title}</h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                   <li key={i} className="flex flex-col gap-2">
                     <div className="flex items-center justify-between text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
                       <span>{skill}</span>
                       <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">OK</span>
                     </div>
                     <div className="h-0.5 w-full bg-border overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: "100%" }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.4, delay: 0.1 + (i * 0.05) }}
                         className="h-full bg-accent"
                       ></motion.div>
                     </div>
                   </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
