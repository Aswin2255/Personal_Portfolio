"use client";

import { motion } from "framer-motion";
import { User, Code2, Cpu, LineChart } from "lucide-react";

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
    <section id="about" className="py-24 relative overflow-hidden bg-background border-b-2 border-border">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-border -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div className="flex flex-col">
            <span className="text-accent font-mono text-xs tracking-[0.2em] mb-4 uppercase inline-block border border-accent/30 px-2 py-1 bg-accent/10 w-fit">
              [ 01 ] SYSTEM IDENTITY
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter mix-blend-difference">
              About Me.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-mono uppercase tracking-widest max-w-sm text-right pb-2 border-b-2 border-border hidden md:block">
            Crafting digital experiences with absolute precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4"></div>
            <div className="relative aspect-square border-2 border-border bg-card overflow-hidden flex flex-col items-center justify-center p-8 z-10">
              {/* Grid Lines Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <User size={140} className="text-foreground mb-4" strokeWidth={1} />
              <div className="border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground z-10">
                USER_PROFILE: LOADED
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg text-muted-foreground leading-relaxed font-sans"
            >
              <p className="text-xl text-foreground font-medium mb-4">
                Full Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, Node.js, and modern backends. Specialized in <span className="bg-accent text-black px-1 font-bold">performance optimization</span>, scalable architecture, and real-time systems.
              </p>
              <p>
                Experience building admin dashboards, analytics systems, microservices, and integrating third-party APIs. Passionate about building developer tools and <strong className="text-foreground uppercase border-b border-accent pb-0.5">LLM-powered applications</strong>.
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
            >
              <motion.div variants={item} className="p-6 bg-card border-2 border-border hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 border-2 border-border flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
                  <Code2 size={24} />
                </div>
                <h3 className="text-foreground font-black uppercase tracking-tight mb-2 text-xl">Full Stack</h3>
                <p className="text-xs font-mono text-muted-foreground uppercase leading-relaxed">End-to-end web apps with modern stack.</p>
              </motion.div>
              
              <motion.div variants={item} className="p-6 bg-card border-2 border-border hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 border-2 border-border flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
                  <Cpu size={24} />
                </div>
                <h3 className="text-foreground font-black uppercase tracking-tight mb-2 text-xl">Systems</h3>
                <p className="text-xs font-mono text-muted-foreground uppercase leading-relaxed">Microservices & real-time APIs.</p>
              </motion.div>
              
              <motion.div variants={item} className="p-6 bg-card border-2 border-border hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all group sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 border-2 border-border flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
                  <LineChart size={24} />
                </div>
                <h3 className="text-foreground font-black uppercase tracking-tight mb-2 text-xl">Optimize</h3>
                <p className="text-xs font-mono text-muted-foreground uppercase leading-relaxed">Bundle size & performance tuning.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
