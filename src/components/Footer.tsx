const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.15 0-1.61-.57-2.9-1.5-3.96.15-.37.65-1.87-.15-3.91 0 0-1.28-.41-4.2 1.57a14.82 14.82 0 0 0-7.6 0C4.38 2.46 3.1 2.87 3.1 2.87c-.8 2.04-.3 3.54-.15 3.91C2.02 7.84 1.45 9.13 1.45 10.74c0 5.58 3.32 6.79 6.5 7.15-.8.7-1.02 1.94-1 3.02V22" />
    <path d="M9 20c-4.5 1.5-5-2.5-7-3" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)


export function Footer() {
  return (
    <footer className="glass-panel border-x-0 border-b-0 border-t-white/10 py-12 relative z-10 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Aswinkumar
            </a>
            <p className="text-sm text-foreground/60 mt-2 font-light">
              Building scalable web experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Aswin2255" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors mix-blend-difference">
                <span className="sr-only">GitHub</span>
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors mix-blend-difference">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-foreground/50 font-light">
              © {new Date().getFullYear()} Aswinkumar AR. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
