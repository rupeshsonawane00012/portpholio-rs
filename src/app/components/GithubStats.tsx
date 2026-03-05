import { motion } from "motion/react";
import { Github, GitFork, Star } from "lucide-react";

export function GithubStats() {
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
            GitHub Activity
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          My contributions and open source work
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">GitHub Stats</h3>
          </div>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=rupeshsonawane00012&show_icons=true&theme=radical&hide_border=true&bg_color=00000000`}
            alt="GitHub Stats"
            className="w-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Top Languages</h3>
          </div>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=rupeshsonawane00012&layout=compact&theme=radical&hide_border=true&bg_color=00000000`}
            alt="Top Languages"
            className="w-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <GitFork className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Contribution Graph</h3>
          </div>
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=rupeshsonawane00012&theme=react-dark&hide_border=true&bg_color=00000000`}
            alt="Contribution Graph"
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
