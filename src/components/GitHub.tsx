import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Star, GitFork, BookOpen } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.15 0-1.61-.57-2.9-1.5-3.96.15-.37.65-1.87-.15-3.91 0 0-1.28-.41-4.2 1.57a14.82 14.82 0 0 0-7.6 0C4.38 2.46 3.1 2.87 3.1 2.87c-.8 2.04-.3 3.54-.15 3.91C2.02 7.84 1.45 9.13 1.45 10.74c0 5.58 3.32 6.79 6.5 7.15-.8.7-1.02 1.94-1 3.02V22" />
    <path d="M9 20c-4.5 1.5-5-2.5-7-3" />
  </svg>
)

type Repo = {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

type Profile = {
  public_repos: number
  followers: number
  following: number
  avatar_url: string
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  const username = "Aswin2255"

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ])
        
        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json()
          const reposData = await reposRes.json()
          
          setProfile(profileData)
          setRepos(reposData)
        }
      } catch (error) {
        console.error("Failed to fetch Github data", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()
  }, [])

  return (
    <section id="github" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-16">
            <GithubIcon className="h-10 w-10 mb-4 text-foreground opacity-80" />
            <h2 className="text-3xl font-bold tracking-tight mb-4">Open Source & GitHub</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>

          {!loading && profile && (
            <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between glass-card border-none p-8 rounded-[2rem]">
              <div className="flex items-center gap-6 mb-6 sm:mb-0">
                <img 
                  src={profile.avatar_url} 
                  alt={`${username}'s avatar`}
                  className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-xl"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">@{username}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-foreground/70 font-light">
                    <span><strong className="font-semibold text-foreground">{profile.public_repos}</strong> Repositories</span>
                    <span><strong className="font-semibold text-foreground">{profile.followers}</strong> Followers</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={`https://github.com/${username}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground h-11 px-6"
                >
                  Follow on GitHub
                </a>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {loading ? (
              // Loading skeletons
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="h-48 animate-pulse bg-white/5 border-none rounded-[2rem]" />
              ))
            ) : (
              repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="h-full flex flex-col glass-card border-none rounded-3xl group-hover:bg-white/20 dark:group-hover:bg-white/5 transition-all duration-300">
                      <CardHeader className="pb-3 pt-6 px-6">
                        <CardTitle className="text-lg flex items-center gap-2 text-blue-500 font-semibold">
                          <BookOpen className="h-5 w-5" />
                          {repo.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm h-10 text-foreground/70 font-light mt-2">
                          {repo.description || "No description provided."}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end px-6 pb-6">
                        <div className="flex items-center gap-4 text-sm text-foreground/60 w-full font-light">
                          {repo.language && (
                            <span className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1.5 group-hover:text-yellow-500 transition-colors">
                            <Star className="h-4 w-4" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <GitFork className="h-4 w-4" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 w-full max-w-6xl mx-auto flex flex-col items-center overflow-x-auto glass-card border-none p-10 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Contributions</h3>
            <div className="w-full overflow-x-auto flex justify-center pb-2">
              <GitHubCalendar 
                username={username} 
                blockSize={14}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

