import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ExternalLink, Video } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.15 0-1.61-.57-2.9-1.5-3.96.15-.37.65-1.87-.15-3.91 0 0-1.28-.41-4.2 1.57a14.82 14.82 0 0 0-7.6 0C4.38 2.46 3.1 2.87 3.1 2.87c-.8 2.04-.3 3.54-.15 3.91C2.02 7.84 1.45 9.13 1.45 10.74c0 5.58 3.32 6.79 6.5 7.15-.8.7-1.02 1.94-1 3.02V22" />
    <path d="M9 20c-4.5 1.5-5-2.5-7-3" />
  </svg>
)

export function Projects() {
  const projects = [
    {
      title: "Omegle-style P2P Video Chat App",
      description: "A real-time video chat application allowing users to connect randomly with strangers. Engineered with WebRTC for peer-to-peer connection and WebSocket for rapid signaling.",
      technologies: ["React", "Node.js", "WebRTC", "WebSocket", "Tailwind CSS", "TypeScript"],
      features: [
        "Real-time low-latency video chat",
        "Custom signaling server",
        "Direct peer-to-peer connection",
        "Responsive glassmorphism UI",
      ],
      github: "https://github.com/Aswin2255",
      live: "#",
      icon: <Video className="h-6 w-6 text-blue-500" />,
    },
    // We can add more projects here if requested, but for now we'll feature the main one
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <Card className="h-full flex flex-col glass-card border-none overflow-hidden relative transition-all duration-500 group-hover:bg-white/20 dark:group-hover:bg-white/5 rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110">
                    {project.icon}
                  </div>
                  <CardHeader className="pt-8 px-8">
                    <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="pt-3 text-foreground/70 font-light">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4 px-8">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-foreground/60 space-y-1 font-light">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="glass-button bg-transparent border-white/20 font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 p-8 pt-0 mt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring glass-button h-10 px-4">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-blue-600 text-white shadow hover:bg-blue-700 h-10 px-4">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
