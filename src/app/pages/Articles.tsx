import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Docker Networking Explained",
    excerpt:
      "A deep dive into Docker networking concepts, container communication, and best practices for building microservices architectures.",
    date: "March 1, 2026",
    readTime: "8 min read",
    category: "DevOps",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Understanding React Internals",
    excerpt:
      "Exploring React's virtual DOM, reconciliation algorithm, and how React optimizes rendering for better performance.",
    date: "February 15, 2026",
    readTime: "12 min read",
    category: "Frontend",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "My DevOps Learning Journey",
    excerpt:
      "From basics to production deployments - sharing my experience learning DevOps tools, practices, and automation workflows.",
    date: "February 1, 2026",
    readTime: "6 min read",
    category: "Career",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Building Scalable AWS Architecture",
    excerpt:
      "Design patterns and best practices for building highly available, fault-tolerant applications on AWS cloud infrastructure.",
    date: "January 20, 2026",
    readTime: "10 min read",
    category: "Cloud",
    gradient: "from-orange-500 to-red-500",
  },
];

export function Articles() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Articles & Blog
          </span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Thoughts on software development, cloud infrastructure, and tech trends
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative cursor-pointer"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${article.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
            />
            <div className="h-full p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-secondary">
                  {article.category}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-r ${article.gradient}`}
                />
              </div>

              <h2 className="text-2xl font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {article.title}
              </h2>

              <p className="text-muted-foreground mb-4">{article.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
                <motion.div
                  className="flex items-center gap-1 text-foreground"
                  whileHover={{ x: 5 }}
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
