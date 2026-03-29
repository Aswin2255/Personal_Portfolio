"use client";

import { motion } from "framer-motion";
import { Activity, Zap, TrendingUp } from "lucide-react";

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background border-b-2 border-border">
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
               [ 04 ] WORK HISTORY
             </span>
             <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter mix-blend-difference">
               Experience.
             </h2>
          </div>
          <div className="text-right pb-2 border-b-2 border-border hidden md:block">
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest max-w-xs">
              REAL-WORLD IMPACT AND CASE STUDIES.
            </p>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 md:ml-0 md:pl-10 py-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[49px] top-6 w-5 h-5 bg-accent border-4 border-background box-content z-10 hidden md:block" />
            
            <div className="flex flex-col md:flex-row justify-between mb-8 items-start gap-4">
               <div>
                 <h3 className="text-3xl md:text-4xl font-black text-foreground flex items-center gap-4 uppercase tracking-tighter">
                   Full Stack Developer 
                   <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-card text-accent border border-accent/50 shadow-[2px_2px_0_hsl(76,100%,50%)]">Tag8</span>
                 </h3>
                 <p className="text-muted-foreground mt-4 font-mono text-sm uppercase tracking-widest">July 2023 – Present</p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Problem Column */}
              <div className="bg-card border-2 border-border p-8 relative overflow-hidden group hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] transition-all">
                <div className="absolute -bottom-4 -right-4 p-4 opacity-5 text-accent group-hover:scale-110 group-hover:opacity-10 transition-all"><Activity size={120} /></div>
                <h4 className="flex items-center gap-3 font-black text-foreground uppercase tracking-tight text-xl mb-6 pb-4 border-b-2 border-border">
                  <div className="w-3 h-3 bg-red-500" />
                  The Problems
                </h4>
                <ul className="space-y-4 text-muted-foreground text-sm font-mono">
                  <li className="flex gap-3"><span className="text-red-500">{'>'}</span> Legacy React app had large bundle size and poor performance.</li>
                  <li className="flex gap-3"><span className="text-red-500">{'>'}</span> Manual workflows were handled using Excel.</li>
                  <li className="flex gap-3"><span className="text-red-500">{'>'}</span> Lacked internal admin dashboard.</li>
                  <li className="flex gap-3"><span className="text-red-500">{'>'}</span> Lacked Shopify order automation.</li>
                </ul>
              </div>

              {/* Solution Column */}
              <div className="bg-card border-2 border-border p-8 relative overflow-hidden group hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] transition-all lg:col-span-1">
                <div className="absolute -bottom-4 -right-4 p-4 opacity-5 text-accent group-hover:scale-110 group-hover:opacity-10 transition-all"><Zap size={120} /></div>
                <h4 className="flex items-center gap-3 font-black text-foreground uppercase tracking-tight text-xl mb-6 pb-4 border-b-2 border-border">
                  <div className="w-3 h-3 bg-accent" />
                  What I Did
                </h4>
                <ul className="space-y-4 text-muted-foreground text-sm font-mono">
                  <li className="flex gap-3"><span className="text-accent">{'>'}</span> Migrated legacy React app to Vite.</li>
                  <li className="flex gap-3"><span className="text-accent">{'>'}</span> Applied TanStack Query for server state.</li>
                  <li className="flex gap-3"><span className="text-accent">{'>'}</span> Implemented code splitting & lazy loading.</li>
                  <li className="flex gap-3"><span className="text-accent">{'>'}</span> Built a full Admin Dashboard to replace Excel.</li>
                  <li className="flex gap-3"><span className="text-accent">{'>'}</span> Integrated Shopify API for order automation.</li>
                  <li className="flex gap-3"><span className="text-accent">{'>'}</span> Developed REST APIs & microservices.</li>
                </ul>
              </div>

              {/* Impact Column - Highlighted */}
              <div className="bg-muted border-2 border-border p-8 relative overflow-hidden group hover:border-accent hover:shadow-[4px_4px_0_hsl(76,100%,50%)] transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-foreground"><TrendingUp size={100} /></div>
                <h4 className="flex items-center gap-3 font-black text-foreground uppercase tracking-tight text-xl mb-6 pb-4 border-b-2 border-border">
                  <TrendingUp size={24} className="text-accent" />
                  Impact
                </h4>
                
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                  <motion.div variants={item} className="p-4 bg-background border border-border flex flex-col justify-center items-start">
                    <div className="text-3xl font-black text-accent mb-1">40%</div>
                    <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">Bundle Size Reduction</div>
                  </motion.div>
                  
                  <motion.div variants={item} className="p-4 bg-background border border-border flex flex-col justify-center items-start">
                    <div className="text-3xl font-black text-accent mb-1 flex items-center gap-2">
                       80+ <Zap size={20} className="text-accent fill-accent/20" />
                    </div>
                    <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">Lighthouse Score (from 50)</div>
                  </motion.div>
                  
                  <motion.div variants={item} className="p-4 bg-background border border-border flex flex-col justify-center items-start">
                    <div className="text-3xl font-black text-accent mb-1">80%</div>
                    <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">Reduction in Manual Work</div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
