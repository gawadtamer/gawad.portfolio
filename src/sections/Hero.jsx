import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { FiDownload, FiSend } from "react-icons/fi";
import { personalInfo } from "../data/data";
import profileImg from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-grad-radial-glow blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left"
        >
          <span className="eyebrow mb-4">Welcome to my portfolio</span>

          <h1 className="font-display text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">
              {personalInfo.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p dir="rtl" className="mt-2 font-display text-lg text-slate-400">
            {personalInfo.nameArabic}
          </p>

          <div className="mt-4 flex h-9 items-center font-mono text-lg text-accent-cyan sm:text-xl">
            <Typewriter
              options={{
                strings: personalInfo.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 60,
              }}
            />
          </div>

          <p className="mt-6 max-w-md text-slate-400">
            I build clean, modern, and fully responsive web interfaces —
            crafted with React, Vite, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={personalInfo.cvUrl}
              download
              data-cursor-hover
              className="flex items-center gap-2 rounded-full bg-grad-signature px-6 py-3 text-sm font-semibold text-base-950 shadow-glow transition-transform hover:scale-105"
            >
              <FiDownload size={18} /> Download CV
            </a>
            <Link
              to="contact"
              smooth
              duration={600}
              data-cursor-hover
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-accent-cyan/50 hover:bg-white/10"
            >
              <FiSend size={16} /> Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-grad-signature opacity-40 blur-2xl" />
            <div className="animate-float">
              <div className="relative h-64 w-64 rounded-full border-2 border-white/10 p-2 sm:h-80 sm:w-80">
                <div className="border-gradient h-full w-full overflow-hidden rounded-full">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 justify-center rounded-full border border-white/20 pt-2">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
