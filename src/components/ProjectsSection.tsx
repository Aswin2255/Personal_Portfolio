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
      techStack: ["React", "Node.js", "WebRTC", "WebSocket", "Tailwind CSS"],
      type: "Network Architecture",
      icon: <MonitorPlay size={48} strokeWidth={1} />,
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background border-b-2 border-border">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border pointer-events-none" />
      
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
               [ 02 ] DEPLOYED SYSTEMS
             </span>
             <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter mix-blend-difference">
               Projects.
             </h2>
          </div>
          <div className="text-right pb-2 border-b-2 border-border hidden md:block">
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest max-w-xs">
              PRODUCTION-GRADE ARCHITECTURE & SCALABLE INFRASTRUCTURE.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Image / Visualization Target */}
              <div className={`lg:col-span-7 h-64 md:h-[400px] w-full border-2 border-border bg-card relative overflow-hidden transition-colors flex items-center justify-center p-4 md:p-8 hover:border-accent ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                 {/* Technical Grid Background */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                 
                 {/* Internal Console Box */}
                 <div className="w-full h-full relative border-2 border-border bg-background flex flex-col group-hover:shadow-[8px_8px_0_hsl(76,100%,50%)] transition-all z-10">
                   
                   {/* Top Bar */}
                   <div className="h-8 border-b-2 border-border flex items-center justify-between px-4 bg-muted">
                     <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 bg-border"></div>
                       <div className="w-2.5 h-2.5 bg-border"></div>
                       <div className="w-2.5 h-2.5 bg-border"></div>
                     </div>
                     <span className="text-[10px] font-mono tracking-widest text-muted-foreground">TERMINAL_0{index + 1}</span>
                   </div>
                   
                   <div className="flex-1 flex flex-col items-center justify-center relative p-8">
                     <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }} 
                        className="text-foreground group-hover:text-accent transition-colors"
                     >
                        {project.icon}
                     </motion.div>
                     <p className="absolute bottom-4 left-4 text-[10px] font-mono text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                       STATUS: ONLINE
                     </p>
                   </div>
                 </div>
              </div>

              {/* Data / Text side */}
              <div className="lg:col-span-5 flex flex-col justify-center py-4 bg-background z-10 relative">
                <div className="mb-6">
                  <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block border-l-2 border-accent pl-2">{project.type}</span>
                  <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="border border-border p-6 bg-card text-muted-foreground text-sm font-sans leading-relaxed mb-6">
                  <p>{project.description}</p>
                </div>

                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground mb-3">Tech Stack_</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-foreground bg-muted px-2 py-1 border border-border">{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href="#" className="flex items-center justify-center gap-2 border-2 border-border bg-card hover:bg-accent hover:text-black hover:border-accent transition-colors px-6 py-3 text-xs font-bold uppercase tracking-widest w-full text-center">
                    <GithubIcon size={16} /> Source
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 border-2 border-border bg-card hover:bg-accent hover:text-black hover:border-accent transition-colors px-6 py-3 text-xs font-bold uppercase tracking-widest w-full text-center">
                    <ExternalLink size={16} /> Demo
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
          className="mt-24 text-center flex justify-center"
        >
          <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-black font-black uppercase tracking-[0.2em] hover:bg-white transition-colors border-2 border-transparent">
            Access Full Archive <GithubIcon size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
