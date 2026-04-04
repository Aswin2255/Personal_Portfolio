import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

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

export function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "hello@example.com", // Placeholder
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:hello@example.com",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/aswinkumar", // Placeholder
      icon: <LinkedinIcon className="h-6 w-6" />,
      href: "https://linkedin.com/in/aswinkumar",
    },
    {
      name: "GitHub",
      value: "github.com/Aswin2255",
      icon: <GithubIcon className="h-6 w-6" />,
      href: "https://github.com/Aswin2255",
    },
    {
      name: "Phone",
      value: "+1 (555) 000-0000", // Placeholder
      icon: <Phone className="h-6 w-6" />,
      href: "tel:+15550000000",
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-8 bg-background border border-muted rounded-2xl hover:border-blue-500/50 hover:shadow-lg transition-all group"
              >
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{link.name}</h3>
                <p className="text-muted-foreground">{link.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
