import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function About() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "TanStack Query"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "REST API", "JWT Auth", "Microservices", "WebSockets", "WebRTC"],
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "DevOps & Tools",
      technologies: ["Docker", "Redis", "CI/CD", "Linux", "Grafana", "Git"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-6 glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed font-light">
                As a passionate Full Stack Software Engineer, I've spent the last 2+ years diving deep into modern web development. My journey started with building simple static sites and has evolved into architecting scalable, real-time applications.
              </p>
              <p className="text-foreground/80 leading-relaxed font-light">
                Currently, I'm a Full Stack Developer at Tag8, where I've focused on building robust internal tools, developing high-performance admin panels, and implementing secure JWT authentication systems. I take pride in optimizing bundle sizes and ensuring our applications run flawlessly out in the wild.
              </p>
              
              <div className="pt-6 relative border-l-2 border-foreground/20 pl-6 ml-2 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[35px] bg-blue-500 w-4 h-4 rounded-full border-4 border-background"></div>
                  <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                  <p className="text-blue-500 text-sm mb-2">Tag8 • 2023 – Present</p>
                  <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 font-light">
                    <li>Built and maintained comprehensive admin panel</li>
                    <li>Improved overall application performance</li>
                    <li>Implemented secure JWT authentication</li>
                    <li>Significantly optimized bundle size for faster load times</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold px-2">Tech Stack</h3>
              <div className="grid gap-4">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="glass-panel border-none shadow-none rounded-2xl">
                    <CardHeader className="py-4">
                      <CardTitle className="text-lg font-medium">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0 pb-4">
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="glass-button bg-transparent hover:bg-white/10 font-normal">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
