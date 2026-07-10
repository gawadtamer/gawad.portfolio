import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
