"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Activity, Zap, TrendingUp, Presentation } from "lucide-react";

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
    <section id="experience" className="py-24 relative bg-black">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experience</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow hidden md:block"></div>
          </div>
          <p className="text-zinc-400 text-lg">Real-world impact and case studies.</p>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-8 py-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] top-6 w-4 h-4 rounded-full bg-indigo-500 border-4 border-black box-content z-10 hidden md:block" />
            
            <div className="flex flex-col md:flex-row justify-between mb-8 items-start gap-4">
               <div>
                 <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                   Full Stack Developer 
                   <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">Tag8</span>
                 </h3>
                 <p className="text-zinc-400 mt-1 font-mono text-sm">July 2023 – Present</p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Problem Column */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-red-500 group-hover:scale-110 transition-transform"><Activity size={60} /></div>
                <h4 className="flex items-center gap-2 font-semibold text-white mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  The Problems
                </h4>
                <ul className="space-y-3 text-zinc-400 text-sm">
                  <li className="flex gap-2"><ChevronRight className="shrink-0 text-zinc-600 mt-0.5" size={16} /> Legacy React application had large bundle size and poor performance</li>
                  <li className="flex gap-2"><ChevronRight className="shrink-0 text-zinc-600 mt-0.5" size={16} /> Manual workflows were handled using Excel</li>
                  <li className="flex gap-2"><ChevronRight className="shrink-0 text-zinc-600 mt-0.5" size={16} /> Needed internal admin dashboard</li>
                  <li className="flex gap-2"><ChevronRight className="shrink-0 text-zinc-600 mt-0.5" size={16} /> Needed Shopify order creation/editing automation</li>
                </ul>
              </div>

              {/* Solution Column */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:border-indigo-500/20 transition-colors lg:col-span-1">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-indigo-500 group-hover:scale-110 transition-transform"><Zap size={60} /></div>
                <h4 className="flex items-center gap-2 font-semibold text-white mb-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  What I Did
                </h4>
                <ul className="space-y-3 text-zinc-400 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-indigo-400 mt-0.5" size={16} /> Migrated legacy React app to Vite</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-indigo-400 mt-0.5" size={16} /> Implemented TanStack Query for server state management</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-indigo-400 mt-0.5" size={16} /> Implemented code splitting and lazy loading</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-indigo-400 mt-0.5" size={16} /> Built a full Admin Dashboard to replace Excel</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-indigo-400 mt-0.5" size={16} /> Integrated Shopify API for order automation</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-indigo-400 mt-0.5" size={16} /> Developed REST APIs & microservices using Node.js</li>
                </ul>
              </div>

              {/* Impact Column - Highlighted */}
              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-white/50"><TrendingUp size={100} /></div>
                <h4 className="flex items-center gap-2 font-semibold text-indigo-300 mb-6">
                  <TrendingUp size={18} />
                  Impact & Metrics
                </h4>
                
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                  <motion.div variants={item} className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-2xl font-bold text-green-400 mb-1">40%</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wide">Bundle Size Reduction</div>
                  </motion.div>
                  
                  <motion.div variants={item} className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-2xl font-bold text-emerald-400 mb-1 flex items-center gap-2">
                       80+ <Zap size={16} className="text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wide">Lighthouse Score (from 50)</div>
                  </motion.div>
                  
                  <motion.div variants={item} className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">80%</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wide">Reduction in Manual Work</div>
                  </motion.div>
                  
                  <motion.div variants={item} className="pt-2 text-sm text-indigo-200/70 border-t border-white/10 mt-2">
                    Improved deployment speed and overall application maintainability.
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
