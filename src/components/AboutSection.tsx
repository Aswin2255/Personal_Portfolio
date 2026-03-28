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
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              About Me
            </h2>
            <div className="h-px bg-gradient-to-r from-zinc-800 to-transparent flex-grow"></div>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl font-light">
            Crafting digital experiences with precision.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <User size={120} className="text-zinc-700" strokeWidth={1} />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg text-zinc-300 leading-relaxed"
            >
              <p>
                Full Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, Node.js, and modern backend technologies. Specialized in <strong className="text-white">performance optimization</strong>, scalable architecture, and real-time applications. 
              </p>
              <p>
                Experience building admin dashboards, analytics systems, microservices, and integrating third-party APIs like Shopify. Passionate about building developer tools and <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">LLM-powered applications</strong>.
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
            >
              <motion.div variants={item} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                <Code2 className="text-indigo-400 mb-4" size={28} />
                <h3 className="text-white font-semibold mb-2">Full Stack</h3>
                <p className="text-sm text-zinc-400">End-to-end web apps with modern MERN stack.</p>
              </motion.div>
              
              <motion.div variants={item} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                <Cpu className="text-purple-400 mb-4" size={28} />
                <h3 className="text-white font-semibold mb-2">Systems</h3>
                <p className="text-sm text-zinc-400">Microservices, WebRTC, and real-time APIs.</p>
              </motion.div>
              
              <motion.div variants={item} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                <LineChart className="text-green-400 mb-4" size={28} />
                <h3 className="text-white font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-zinc-400">Bundle size reduction and performance tuning.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
