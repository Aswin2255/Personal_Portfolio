"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium tracking-wider uppercase text-sm mb-4 inline-block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Let&apos;s build something together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-12">
              I&apos;m currently open to new opportunities, collaborations, or discussing your next big project. Drop a message and let&apos;s turn ideas into reality.
            </p>

            <div className="space-y-6">
              <a href="mailto:contact@aswinkumar.com" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,209,255,0.1)] group-hover:shadow-[0_0_20px_var(--color-primary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Email</h4>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">contact@aswinkumar.com</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/aswinkumar" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all shadow-[0_0_15px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_20px_var(--color-secondary)]">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">LinkedIn</h4>
                  <span className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">Connect professionally</span>
                </div>
              </a>

              <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">GitHub</h4>
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Inspect my open source work</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Form Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl z-10 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading || success}
                  className={`w-full rounded-xl py-4 font-semibold transition-all flex justify-center items-center gap-2 ${
                    success 
                      ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-[0_0_20px_rgba(0,209,255,0.3)] hover:shadow-[0_0_30px_rgba(0,209,255,0.5)] border border-transparent"
                  } disabled:opacity-70`}
                 >
                  {loading ? (
                    <span>Sending...</span>
                  ) : success ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} Aswinkumar. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="https://github.com/aswinkumar" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors border border-white/5"><GithubIcon size={18} /></a>
             <a href="https://linkedin.com/in/aswinkumar" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors border border-white/5"><LinkedinIcon size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
