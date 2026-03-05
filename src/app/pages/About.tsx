import { motion } from "motion/react";
import { Code, Briefcase, Target, Rocket } from "lucide-react";

export function About() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Get to know more about my journey and aspirations
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Introduction</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I'm Rupesh Sonawane, a Computer Science graduate passionate about building
            performant web applications and cloud infrastructure. I enjoy solving
            problems and creating systems that scale. Based in Pune, India, I'm
            constantly learning and exploring new technologies to build better solutions.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Skills Overview</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-3">Frontend Development</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Building responsive and interactive user interfaces with modern web
                technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  HTML
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  CSS
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  JavaScript
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Cloud & DevOps</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Deploying and managing scalable infrastructure on cloud platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  AWS
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  Docker
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  Linux
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Version Control</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Collaborating on code with modern version control systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  Git
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  GitHub
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  GitLab
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Programming</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Writing clean, efficient code for various applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  Python
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I work with a diverse range of technologies to build end-to-end solutions:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  React
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  TailwindCSS
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  JavaScript
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  AWS
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  Docker
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary">
                  Python
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Career Goals</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to continue growing as a software engineer by working on
            challenging projects that have real-world impact. I'm particularly interested
            in cloud architecture, DevOps practices, and building scalable web
            applications. I aim to contribute to open-source projects and share my
            knowledge with the developer community through writing and collaboration.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
