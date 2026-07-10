import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "../data/data";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(30);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
          scrolled ? "glass py-3 shadow-lg" : "py-2"
        }`}
      >
        <Link
          to="home"
          smooth
          duration={600}
          data-cursor-hover
          className="cursor-pointer font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">G</span>
          <span className="text-slate-100">awad.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth
                duration={600}
                spy
                data-cursor-hover
                className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="navActivePill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          smooth
          duration={600}
          data-cursor-hover
          className="hidden cursor-pointer rounded-full bg-grad-signature px-5 py-2 text-sm font-semibold text-base-950 shadow-glowCyan transition-transform hover:scale-105 md:block"
        >
          Hire Me
        </Link>

        <button
          onClick={() => setOpen(!open)}
          data-cursor-hover
          aria-label="Toggle menu"
          className="text-slate-100 md:hidden"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth
                    duration={600}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                      activeId === link.id
                        ? "bg-white/10 text-white"
                        : "text-slate-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-xl bg-grad-signature px-4 py-3 text-center text-sm font-semibold text-base-950"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
