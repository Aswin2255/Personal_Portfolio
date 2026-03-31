"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll
      const sections = ["about", "experience", "projects", "skills", "contact"];
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= (el.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/70 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="font-heading font-bold text-foreground tracking-tight text-xl flex items-center gap-1">
            AK<span className="text-primary text-2xl leading-none">.</span>
          </div>

           {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
             <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
                {links.map((link) => {
                  const isActive = activeSection === link.name.toLowerCase();
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-medium transition-all px-4 py-1.5 rounded-full ${
                        isActive 
                          ? "bg-white/10 text-white shadow-sm" 
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
             </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <a href="#contact" className="text-sm font-medium text-white px-5 py-2 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary transition-all shadow-[0_0_15px_rgba(0,209,255,0.3)] hover:shadow-[0_0_25px_rgba(0,209,255,0.5)]">
               Hire Me
             </a>
          </div>

          {/* Mobile Nav Button */}
          <button 
            className="md:hidden text-foreground p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 border-t border-white/10"
          >
            <button 
              className="absolute top-6 right-6 text-foreground p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-2 w-full">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-muted-foreground hover:text-white transition-all py-4 border-b border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                 href="#contact"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 onClick={() => setMobileMenuOpen(false)}
                 className="mt-8 text-center text-lg font-medium text-white px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
