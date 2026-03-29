"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-border pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
               <span className="text-accent font-mono text-xs tracking-[0.2em] mb-4 uppercase inline-block border border-accent/30 px-2 py-1 bg-accent/10 w-fit">
                 [ 05 ] COMMUNICATION LINK
               </span>
               <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter mix-blend-difference mb-6">
                 Connect.
               </h2>
               <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm max-w-md border-l-2 border-accent pl-4">
                 Open to new opportunities, collaborations, or discussing the next big build. Initiate sequence.
               </p>
            </div>

            <div className="space-y-6 mb-12">
              <a href="mailto:contact@aswinkumar.com" className="flex items-center gap-6 p-4 border-2 border-border bg-card group hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all">
                <div className="p-4 border-2 border-border bg-background group-hover:bg-accent group-hover:text-black transition-colors flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-foreground uppercase tracking-tight text-xl">Email Protocol</h4>
                  <span className="text-xs text-muted-foreground font-mono group-hover:text-accent transition-colors">contact@aswinkumar.com</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/aswinkumar" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 border-2 border-border bg-card group hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all">
                <div className="p-4 border-2 border-border bg-background group-hover:bg-accent group-hover:text-black transition-colors flex items-center justify-center">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h4 className="font-black text-foreground uppercase tracking-tight text-xl">LinkedIn Access</h4>
                  <span className="text-xs text-muted-foreground font-mono group-hover:text-accent transition-colors">Connect professionally</span>
                </div>
              </a>

              <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 border-2 border-border bg-card group hover:shadow-[4px_4px_0_hsl(76,100%,50%)] hover:-translate-y-1 transition-all">
                <div className="p-4 border-2 border-border bg-background group-hover:bg-accent group-hover:text-black transition-colors flex items-center justify-center">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <h4 className="font-black text-foreground uppercase tracking-tight text-xl">GitHub Source</h4>
                  <span className="text-xs text-muted-foreground font-mono group-hover:text-accent transition-colors">Inspect repositories</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 border-2 border-border bg-card relative shadow-[8px_8px_0_hsl(76,100%,50%)]">
              {/* Technical background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Identifier // Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border-2 border-border px-4 py-3 text-foreground font-mono focus:outline-none focus:border-accent transition-colors"
                    placeholder="GUEST_USER"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Return Path // Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border-2 border-border px-4 py-3 text-foreground font-mono focus:outline-none focus:border-accent transition-colors"
                    placeholder="GUEST@NETWORK.COM"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Payload // Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border-2 border-border px-4 py-3 text-foreground font-mono focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="ENTER DATA BLOCK..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full border-2 border-transparent bg-accent text-black font-black uppercase tracking-[0.2em] py-4 hover:bg-transparent hover:text-accent hover:border-accent transition-colors flex justify-center items-center gap-3 disabled:opacity-50"
                 >
                  {loading ? (
                    <span className="font-mono tracking-widest uppercase text-xs">Transmitting...</span>
                  ) : (
                    <>Transmit Data <Send size={20} strokeWidth={3} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t-2 border-border text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} ASWINKUMAR AR. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex gap-4">
             <a href="https://github.com/aswinkumar" className="p-2 border border-transparent hover:border-accent hover:text-accent transition-colors"><GithubIcon size={18} /></a>
             <a href="https://linkedin.com/in/aswinkumar" className="p-2 border border-transparent hover:border-accent hover:text-accent transition-colors"><LinkedinIcon size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
