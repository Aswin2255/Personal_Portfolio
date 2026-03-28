"use client";

import { motion } from "framer-motion";
import { ExternalLink, LineChart, KeyRound, MonitorPlay } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectsSection() {
  const projects = [
    {
      title: "BYOK Multi-LLM Dashboard",
      description: "Built a Multi-LLM platform where users can connect their own API keys (BYOK). Supports OpenAI, Claude, Gemini, and local models. Features include a chat interface, analytics tracking token usage, cost per model, response times, model comparison, and detailed user session usage across models.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Redis", "Tailwind CSS", "Charts"],
      type: "Featured Project",
      icon: <KeyRound size={24} />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "AI Model Analytics Dashboard",
      description: "Comprehensive analytics dashboard designed to monitor and evaluate AI model performance comprehensively. Tracks metrics including tokens used, accumulated costs, and response latency. Integrates a rich model comparison suite with interactive charts to aid cost-efficiency decisions.",
      techStack: ["React", "Recharts", "Node.js", "Tailwind CSS"],
      type: "Featured Project",
      icon: <LineChart size={24} />,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "WebRTC Omegle Clone",
      description: "An anonymous peer-to-peer video chat framework leveraging WebRTC for low-latency media streams. Implemented an robust WebSocket signaling server in Node.js to manage complex connection lifecycles, stream matching, and media negotiation between peers efficiently.",
      techStack: ["React", "Node.js", "WebRTC", "WebSocket", "Tailwind CSS"],
      type: "Project",
      icon: <MonitorPlay size={24} />,
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-cyan-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">
              Featured Projects
            </h2>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>
          <p className="text-zinc-400 text-lg">My latest work focusing on full-stack apps and scalable systems.</p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Image / Visualization side */}
              <div className={`md:col-span-6 lg:col-span-7 h-64 md:h-[400px] w-full rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors backdrop-blur-md flex items-center justify-center p-8 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                 {/* Abstract visual representations instead of screenshots */}
                 <div className="w-full h-full relative rounded-xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden flex flex-col">
                   <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div className="flex-1 flex items-center justify-center relative p-8">
                     <div className="absolute bg-white/5 top-4 left-4 right-4 h-1/2 rounded-md border border-white/10 pointer-events-none" />
                     <div className="absolute bg-white/5 bottom-4 left-4 right-4 h-1/3 rounded-md border border-white/10 pointer-events-none" />
                     <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }} 
                        className="text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                     >
                        {project.icon}
                     </motion.div>
                   </div>
                 </div>
              </div>

              {/* Text side */}
              <div className={`md:col-span-6 lg:col-span-5 flex flex-col justify-center`}>
                <div className="mb-4">
                  <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 block">{project.type}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-zinc-300 text-sm md:text-base leading-relaxed mb-6 shadow-xl relative z-10">
                  <p>{project.description}</p>
                </div>

                <ul className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="text-sm font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">{tech}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors text-sm font-medium">
                    <GithubIcon size={18} />
                    <span>View Source</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors text-sm font-medium">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
            View all projects on GitHub <GithubIcon size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
