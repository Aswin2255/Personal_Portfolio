"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium tracking-wider uppercase text-sm mb-4 inline-block">
            Work History
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />
          
          <div className="space-y-12 md:space-y-24">
            
            {/* Experience Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row md:justify-between items-center group w-full"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 z-10 shadow-[0_0_10px_var(--color-primary)]" />
              
              {/* Left Side (Empty on Desktop, content on Mobile) */}
              <div className="md:w-[45%] flex justify-end mb-4 md:mb-0 hidden md:flex text-right pr-12">
                <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider">
                  <Calendar size={16} /> July 2023 – Present
                </div>
              </div>

              {/* Right Side (Content) */}
              <div className="w-full md:w-[45%] pl-8 md:pl-12">
                <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,209,255,0.1)]">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Briefcase size={80} />
                  </div>
                  
                  <div className="md:hidden flex items-center gap-2 text-primary font-mono text-xs tracking-wider mb-4 border border-primary/20 px-3 py-1 bg-primary/10 rounded-full w-fit">
                    <Calendar size={12} /> July 2023 – Present
                  </div>
                  
                  <h3 className="text-2xl font-medium text-white mb-2 flex flex-wrap gap-3 items-center">
                    Full Stack Developer
                  </h3>
                  <p className="text-secondary font-medium tracking-wide mb-6">TAG8</p>
                  
                  <ul className="space-y-3">
                    {[
                      "Migrated legacy React app to Vite, reducing bundle size by 40%.",
                      "Implemented TanStack Query for remote server state management.",
                      "Built an extensive internal Admin Dashboard replacing Excel workflows.",
                      "Developed backend REST APIs supporting thousands of daily users.",
                      "Integrated complex Shopify order automation microservices."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                        <ChevronRight size={16} className="text-primary mt-1 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 flex flex-wrap gap-2">
                     {["React", "Node.js", "Vite", "TanStack Query", "REST APIs"].map((tech) => (
                       <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-mono border border-white/5">
                         {tech}
                       </span>
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

