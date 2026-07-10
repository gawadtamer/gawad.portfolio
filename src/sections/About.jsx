import { motion } from "framer-motion";
import { FiBookOpen, FiTarget, FiHeart, FiUser } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { aboutInfo } from "../data/data";

const blocks = [
  { icon: FiUser, title: "Who I Am", text: aboutInfo.intro },
  { icon: FiBookOpen, title: "Education", text: aboutInfo.education },
  { icon: FiTarget, title: "Career Goals", text: aboutInfo.goals },
  { icon: FiHeart, title: "My Passion", text: aboutInfo.passion },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          subtitle="A quick look at who I am, where I'm headed, and what drives my work."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                <block.icon size={20} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-slate-50">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
        >
          {aboutInfo.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
