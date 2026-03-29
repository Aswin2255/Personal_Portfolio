"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-mono ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-xl border-b-2 border-border py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between flex-wrap hidden md:flex">
           {/* Desktop Menu */}
          <div className="flex-1 flex justify-center hidden md:flex">
             <div className="flex items-center bg-card border-2 border-border px-6 py-2 shadow-[4px_4px_0_hsl(76,100%,50%)]">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs font-bold text-muted-foreground hover:text-black hover:bg-accent transition-all uppercase tracking-widest px-4 py-2"
                  >
                    {link.name}
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="container mx-auto px-6 flex items-center justify-between md:hidden pb-2">
          <div className="font-black text-foreground tracking-tighter uppercase text-2xl">AK<span className="text-accent">.</span></div>
          <button 
            className="text-foreground p-2 border-2 border-border hover:bg-accent hover:text-black transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={3} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center font-mono border-x-8 border-accent"
          >
            <button 
              className="absolute top-6 right-6 text-foreground p-3 border-2 border-border hover:bg-accent hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} strokeWidth={3} />
            </button>
            <div className="flex flex-col gap-6 text-center w-full max-w-xs">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-black text-muted-foreground hover:text-black hover:bg-accent transition-all uppercase tracking-[0.2em] border-2 border-transparent hover:border-black p-4 bg-card"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
