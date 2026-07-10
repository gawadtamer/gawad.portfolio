import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import SocialIcons from "../components/SocialIcons";
import { personalInfo } from "../data/data";

const contactCards = [
  { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: "Phone / WhatsApp", value: personalInfo.phone, href: personalInfo.whatsapp },
  { icon: FiMapPin, label: "Location", value: personalInfo.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let's talk"
          title="Contact Me"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href || undefined}
                target={card.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor-hover={!!card.href}
                className={`glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 ${
                  card.href ? "hover:shadow-glow hover:-translate-y-1" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-grad-signature text-base-950">
                  <card.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {card.label}
                  </p>
                  <p className="font-medium text-slate-100" dir="ltr">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <p className="mb-4 text-xs uppercase tracking-wider text-slate-500">
                Find me online
              </p>
              <SocialIcons />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-2xl p-7 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition-colors focus:border-accent-cyan/50"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition-colors focus:border-accent-cyan/50"
              />
            </div>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition-colors focus:border-accent-cyan/50"
            />
            <button
              type="submit"
              data-cursor-hover
              className="flex items-center justify-center gap-2 rounded-full bg-grad-signature px-6 py-3 text-sm font-semibold text-base-950 shadow-glow transition-transform hover:scale-[1.02]"
            >
              <FiSend size={16} /> Send Message
            </button>
            {sent && (
              <p className="text-center text-xs text-accent-cyan">
                Your email app should now be open — thanks for reaching out!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
