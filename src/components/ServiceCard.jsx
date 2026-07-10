import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiLayout, FiTool } from "react-icons/fi";

const iconMap = {
  code: FiCode,
  responsive: FiSmartphone,
  ui: FiLayout,
  maintenance: FiTool,
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-grad-signature text-base-950">
        <Icon size={22} />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-slate-50">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>
    </motion.div>
  );
}
