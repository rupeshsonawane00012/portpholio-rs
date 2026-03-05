import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Rupesh Sonawane
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer | Pune, India
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:rupeshsonawane346@gmail.com"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-purple-500/50 flex items-center justify-center transition-all"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/rupeshsonawane00012"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-purple-500/50 flex items-center justify-center transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/rupesh-sonawane12/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-purple-500/50 flex items-center justify-center transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-pink-500" fill="currentColor" /> using React,
            TailwindCSS & Motion
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2026 Rupesh Sonawane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
