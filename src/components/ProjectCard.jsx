import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const previewThemes = {
  "blood-bank": {
    gradient: "from-rose-600/40 via-red-500/20 to-base-800",
    glyph: "🩸",
  },
  brewhaus: {
    gradient: "from-amber-600/40 via-orange-500/20 to-base-800",
    glyph: "☕",
  },
  gym: {
    gradient: "from-emerald-600/40 via-lime-500/20 to-base-800",
    glyph: "🏋️",
  },
  nike: {
    gradient: "from-slate-500/40 via-zinc-400/10 to-base-800",
    glyph: "👟",
  },
};

export default function ProjectCard({ project, index }) {
  const theme = previewThemes[project.image] || previewThemes["nike"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-800/60 transition-all duration-300 hover:border-accent-violet/40 hover:shadow-glow"
    >
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${theme.gradient}`}
      >
        <span className="text-6xl opacity-80 transition-transform duration-500 group-hover:scale-110">
          {theme.glyph}
        </span>
        <div className="absolute inset-0 bg-grad-radial-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-base-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="flex items-center gap-2 rounded-full bg-grad-signature px-4 py-2 text-sm font-semibold text-base-950 shadow-glow"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100"
          >
            <FiGithub size={16} /> Code
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 font-display text-lg font-semibold text-slate-50">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-accent-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
