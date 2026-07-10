import { motion } from "framer-motion";

export default function SkillCard({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="glass group rounded-2xl p-5 transition-shadow duration-300 hover:shadow-glow"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-slate-100">
          {name}
        </span>
        <span className="font-mono text-xs text-accent-cyan">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-grad-signature"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
