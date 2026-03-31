"use client";

import { motion } from "framer-motion";
import { User, Code2, Server, Zap } from "lucide-react";

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium tracking-wider uppercase text-sm mb-4 inline-block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Building the modern web
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative group w-full"
          >
            {/* Glassmorphism Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center p-8 z-10 shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-full border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                <User size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeWidth={1.5} />
              </div>
              <div className="border border-white/10 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full font-mono text-xs tracking-widest text-primary z-10">
                FULL STACK ENGINE
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-6">
                Full Stack Developer with 2+ years of experience building scalable web applications using <span className="text-white font-medium">React, Next.js, Node.js, and modern backend technologies</span>.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Experienced in <span className="text-white font-medium">performance optimization, REST API development, authentication systems, and microservices architecture</span>.
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            >
              <motion.div variants={item} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Code2 size={24} className="drop-shadow-[0_0_10px_var(--color-primary)]" />
                </div>
                <h3 className="text-white font-medium mb-1">Frontend</h3>
                <p className="text-sm text-muted-foreground font-light">Next.js & React Ecosystem.</p>
              </motion.div>
              
              <motion.div variants={item} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                  <Server size={24} className="drop-shadow-[0_0_10px_var(--color-secondary)]" />
                </div>
                <h3 className="text-white font-medium mb-1">Backend</h3>
                <p className="text-sm text-muted-foreground font-light">Node.js, Databases & APIs.</p>
              </motion.div>
              
              <motion.div variants={item} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group sm:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  <Zap size={24} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
                <h3 className="text-white font-medium mb-1">Performance</h3>
                <p className="text-sm text-muted-foreground font-light">Optimization & Microservices Architecture.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

