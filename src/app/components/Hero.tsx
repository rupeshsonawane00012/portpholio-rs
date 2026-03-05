import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/20 to-cyan-500/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm backdrop-blur-sm">
                👋 Hey, I'm Rupesh
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              I build thoughtful, high-quality web experiences and scalable cloud
              infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors flex items-center gap-2"
                >
                  Get in Touch
                </motion.button>
              </Link>
              <motion.a
                href="#"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"
              />

              {/* Developer Avatar SVG */}
              <svg
                className="relative z-10 w-64 h-64 md:w-96 md:h-96"
                viewBox="0 0 200 200"
                fill="none"
              >
                {/* Body */}
                <ellipse cx="100" cy="140" rx="50" ry="25" fill="url(#gradient1)" />

                {/* Laptop */}
                <rect
                  x="60"
                  y="120"
                  width="80"
                  height="50"
                  rx="4"
                  fill="url(#gradient2)"
                />
                <rect x="65" y="125" width="70" height="40" rx="2" fill="#1a1a2e" />

                {/* Code Lines */}
                <line
                  x1="70"
                  y1="135"
                  x2="95"
                  y2="135"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />
                <line
                  x1="70"
                  y1="145"
                  x2="110"
                  y2="145"
                  stroke="#ec4899"
                  strokeWidth="2"
                />
                <line
                  x1="70"
                  y1="155"
                  x2="90"
                  y2="155"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />

                {/* Head */}
                <circle cx="100" cy="70" r="35" fill="url(#gradient3)" />

                {/* Sunglasses */}
                <rect
                  x="80"
                  y="65"
                  width="15"
                  height="10"
                  rx="3"
                  fill="#1a1a2e"
                />
                <rect
                  x="105"
                  y="65"
                  width="15"
                  height="10"
                  rx="3"
                  fill="#1a1a2e"
                />
                <line
                  x1="95"
                  y1="70"
                  x2="105"
                  y2="70"
                  stroke="#1a1a2e"
                  strokeWidth="2"
                />

                {/* Smile */}
                <path
                  d="M 90 85 Q 100 90 110 85"
                  stroke="#1a1a2e"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
