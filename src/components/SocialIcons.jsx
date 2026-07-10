import {
  FiGithub,
  FiInstagram,
  FiFacebook,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../data/data";

const iconMap = {
  github: FiGithub,
  whatsapp: FaWhatsapp,
  email: FiMail,
  instagram: FiInstagram,
  facebook: FiFacebook,
};

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            data-cursor-hover
            aria-label={link.name}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-grad-signature hover:text-base-950 hover:shadow-glow"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
