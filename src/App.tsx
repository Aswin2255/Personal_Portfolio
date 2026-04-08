import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { GitHubSection } from "./components/GitHub"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="relative min-h-screen text-foreground font-sans selection:bg-blue-500/30 overflow-hidden">
        {/* Ambient Background Blobs */}
        <div className="fixed inset-0 z-[-1] bg-background">
          <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-blue-500/20 blur-[120px] mix-blend-normal pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-purple-500/20 blur-[120px] mix-blend-normal pointer-events-none"></div>
          <div className="absolute top-[40%] left-[60%] w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[100px] mix-blend-normal pointer-events-none"></div>
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <GitHubSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
