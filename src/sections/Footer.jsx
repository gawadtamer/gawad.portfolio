import { Link } from "react-scroll";
import { navLinks, personalInfo } from "../data/data";
import SocialIcons from "../components/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <Link
            to="home"
            smooth
            duration={600}
            className="cursor-pointer font-display text-xl font-bold"
          >
            <span className="text-gradient">G</span>
            <span className="text-slate-100">awad Tamer.</span>
          </Link>
          <p className="mt-2 max-w-xs text-sm text-slate-500">
            Front-End Developer crafting modern, responsive web experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Quick Navigation
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth
                  duration={600}
                  className="cursor-pointer text-sm text-slate-400 transition-colors hover:text-accent-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Connect
          </p>
          <SocialIcons />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center">
        <p className="text-xs text-slate-500">
          © 2026 {personalInfo.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
