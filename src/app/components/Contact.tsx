import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (This is a demo - no actual email sent)");
    setFormData({ name: "", email: "", message: "" });
  };

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
            Get In Touch
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Have a project in mind? Let's work together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.a
              whileHover={{ x: 10 }}
              href="mailto:rupeshsonawane346@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-purple-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">
                  rupeshsonawane346@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 10 }}
              href="https://github.com/rupeshsonawane00012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-purple-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-sm text-muted-foreground">
                  @rupeshsonawane00012
                </p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 10 }}
              href="https://www.linkedin.com/in/rupesh-sonawane12/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-purple-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  rupesh-sonawane12
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-purple-500 focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
          >
            Send Message
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
