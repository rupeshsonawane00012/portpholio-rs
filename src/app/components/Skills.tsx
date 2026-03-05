import { motion } from "motion/react";
import { Code, Cloud, Wrench, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Linux"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "GitLab"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python"],
    color: "from-orange-500 to-red-500",
  },
];

export function Skills() {
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
            Skills & Technologies
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Technologies I work with to build amazing products
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
              }}
            />
            <div className="p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-2.5 mb-4`}>
                <category.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
