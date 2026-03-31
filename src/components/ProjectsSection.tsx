"use client";

import { motion } from "framer-motion";
import { ExternalLink, LineChart, KeyRound, MonitorPlay } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectsSection() {
  const projects = [
    {
      title: "BYOK Multi-LLM Dashboard",
      description: "Built a Multi-LLM platform where users can connect their own API keys (BYOK). Supports OpenAI, Claude, Gemini, and local models. Features include a chat interface, analytics tracking token usage, cost per model, response times, model comparison, and detailed user session usage across models.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Redis", "Tailwind CSS"],
      type: "Featured System",
      icon: <KeyRound size={48} strokeWidth={1} />,
    },
    {
      title: "AI Model Analytics",
      description: "Comprehensive analytics dashboard designed to monitor and evaluate AI model performance comprehensively. Tracks metrics including tokens used, accumulated costs, and response latency. Integrates a rich model comparison suite with interactive charts to aid cost-efficiency decisions.",
      techStack: ["React", "Recharts", "Node.js", "Tailwind CSS"],
      type: "Data Pipeline",
      icon: <LineChart size={48} strokeWidth={1} />,
    },
    {
      title: "WebRTC Omegle Sync",
      description: "An anonymous peer-to-peer video chat framework leveraging WebRTC for low-latency media streams. Implemented an robust WebSocket signaling server in Node.js to manage complex connection lifecycles, stream matching, and media negotiation between peers efficiently.",
      techStack: ["React", "Node.js", "WebRTC", "WebSocket"],
      type: "Network Architecture",
      icon: <MonitorPlay size={48} strokeWidth={1} />,
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium tracking-wider uppercase text-sm mb-4 inline-block">
            Deployed Systems
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all hover:bg-white/10">
                
                {/* Visual Header */}
                <div className="h-48 relative border-b border-white/10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 text-white/50 group-hover:text-primary transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_var(--color-primary)]"
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-secondary font-mono text-[10px] uppercase tracking-widest mb-2 block">{project.type}</span>
                    <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <ul className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <li key={i} className="text-[10px] font-mono text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white">
                      <GithubIcon size={16} /> Source
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary transition-colors px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-transparent">
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex justify-center"
        >
          <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Explore More on GitHub <GithubIcon size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
