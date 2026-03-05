import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Emotion Detection System",
    description: "AI-based system that detects user emotions in real time.",
    technologies: ["Python", "Machine Learning", "OpenCV"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/rupeshsonawane00012",
  },
  {
    title: "AWS Highly Available Web Application",
    description:
      "Architecture includes Load Balancer, Auto Scaling, and Multi-AZ setup.",
    technologies: ["AWS", "Linux", "Docker"],
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/rupeshsonawane00012",
  },
  {
    title: "Portfolio Website",
    description: "Modern developer portfolio with animations.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/rupeshsonawane00012",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Some of my recent work and side projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
            />
            <div className="h-full p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 flex flex-col">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
