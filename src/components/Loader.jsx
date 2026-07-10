import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-accent-cyan border-r-accent-violet" />
            <span className="font-display text-lg font-bold text-gradient">
              GT
            </span>
          </div>
          <motion.p
            className="mt-6 font-mono text-xs tracking-[0.4em] text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LOADING PORTFOLIO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
