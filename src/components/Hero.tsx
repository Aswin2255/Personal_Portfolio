import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.15 0-1.61-.57-2.9-1.5-3.96.15-.37.65-1.87-.15-3.91 0 0-1.28-.41-4.2 1.57a14.82 14.82 0 0 0-7.6 0C4.38 2.46 3.1 2.87 3.1 2.87c-.8 2.04-.3 3.54-.15 3.91C2.02 7.84 1.45 9.13 1.45 10.74c0 5.58 3.32 6.79 6.5 7.15-.8.7-1.02 1.94-1 3.02V22" />
    <path d="M9 20c-4.5 1.5-5-2.5-7-3" />
  </svg>
)

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      <div className="container mx-auto px-4 md:px-6 z-10 w-full flex justify-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl w-full flex flex-col items-start text-left glass-card p-10 md:p-16 rounded-[2.5rem]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-3">
              Hi, I am
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
              Aswinkumar AR.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground/70 mb-6">
              Full Stack Software Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed font-light">
              Full Stack Developer with 2+ years of experience building scalable web applications using React, Node.js, and modern web technologies. Focused on performance optimization, clean architecture, and great user experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-blue-600 text-white shadow hover:bg-blue-700 h-11 px-6">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
            <a href="/aswinkumar.pdf" target="_blank" rel="noopener noreferrer" className="glass-button inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground h-11 px-6">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
            <a href="https://github.com/Aswin2255" target="_blank" rel="noopener noreferrer" className="glass-button inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground h-11 px-6">
              <GithubIcon className="mr-2 h-4 w-4" />
              View GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
