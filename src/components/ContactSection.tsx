"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessagesSquare } from "lucide-react";
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
    <section id="contact" className="pt-24 pb-12 relative bg-black border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Connect</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a question about my projects, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:contact@aswinkumar.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 group-hover:scale-110 transition-all">
                  <Mail size={20} className="text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <span className="text-sm text-zinc-500 font-mono">contact@aswinkumar.com</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/aswinkumar" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 group-hover:scale-110 transition-all">
                  <LinkedinIcon size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <span className="text-sm text-zinc-500 font-mono">Connect professionally</span>
                </div>
              </a>

              <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 group-hover:scale-110 transition-all">
                  <GithubIcon size={20} className="text-zinc-200" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <span className="text-sm text-zinc-500 font-mono">View my repositories</span>
                </div>
              </a>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 text-white/5">
                 <MessagesSquare size={120} />
               </div>
               <h3 className="font-bold text-white mb-2 relative z-10">Available for freelance</h3>
               <p className="text-sm text-zinc-400 relative z-10">Have a project in mind? Let&apos;s build it.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Aswinkumar AR. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="https://github.com/aswinkumar" className="text-zinc-500 hover:text-white transition-colors"><GithubIcon size={18} /></a>
             <a href="https://linkedin.com/in/aswinkumar" className="text-zinc-500 hover:text-white transition-colors"><LinkedinIcon size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
