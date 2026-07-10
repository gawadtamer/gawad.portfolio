export const personalInfo = {
  name: "Gawad Tamer Abdel Fattah Sharara",
  nameArabic: "جواد تامر عبد الفتاح شرارة",
  roles: ["Front-End Developer", "React Developer", "Web Developer"],
  email: "gawadtamer719@gmail.com",
  phone: "+20 01050204024",
  whatsapp: "https://wa.me/2001050204024",
  github: "https://github.com/gawadtamer",
  instagram: "https://www.instagram.com/gawad_tamer33?igsh=eGY3a2tpYzdicXJ4&utm_source=qr",
  facebook: "https://www.facebook.com/share/1Bdk7P6vLY/?mibextid=wwXIfr",
  cvUrl: "/cv/Gawad-Tamer-CV.pdf",
  location: "Egypt",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const aboutInfo = {
  intro:
    "I'm a Front-End Developer who enjoys turning ideas into clean, fast, and responsive interfaces. I focus on writing organized component-based code with React and styling systems like Tailwind CSS, always aiming for pixel-accurate, user-friendly results.",
  education:
    "I'm building my skills through hands-on projects and continuous self-learning in modern front-end technologies, focusing on React.js, Vite, and responsive design systems, while studying core computer science and web development fundamentals.",
  goals:
    "My goal is to grow into a well-rounded Front-End / React Developer, contribute to real-world products used by real people, and eventually lead front-end architecture on ambitious web applications.",
  passion:
    "I'm passionate about building modern, responsive, and accessible web applications — the kind of interfaces that feel effortless to use, load fast, and look great on any screen size.",
  stats: [
    { label: "Projects Built", value: "4+" },
    { label: "Technologies", value: "9+" },
    { label: "Focus", value: "React & UI" },
  ],
};

export const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "JavaScript", level: 85 },
  { name: "Bootstrap", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "React.js", level: 88 },
  { name: "React Vite", level: 85 },
  { name: "Git & GitHub", level: 80 },
  { name: "Responsive Web Design", level: 93 },
];

export const projects = [
  {
    id: 1,
    title: "Blood Bank Website",
    description:
      "A community-focused platform designed to connect blood donors with recipients, featuring clean information architecture and an easy-to-navigate, responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "blood-bank",
    liveUrl: "https://gawadtamer.github.io/Blood-bank/",
    githubUrl: "https://github.com/gawadtamer/Blood-bank",
  },
  {
    id: 2,
    title: "BrewHaus Cafe Website",
    description:
      "A warm, modern landing page for a cafe brand — showcasing the menu, ambience, and story with smooth scrolling sections and inviting visuals.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "brewhaus",
    liveUrl: "https://gawadtamer.github.io/brewhaus-cafe/",
    githubUrl: "https://github.com/gawadtamer/brewhaus-cafe",
  },
  {
    id: 3,
    title: "Gym Website",
    description:
      "A bold, high-energy fitness website with a membership-driven layout, class schedules, and trainer highlights built for conversions.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "gym",
    liveUrl: "https://gawadtamer.github.io/gym/",
    githubUrl: "https://github.com/gawadtamer/gym",
  },
  {
    id: 4,
    title: "Nike Website",
    description:
      "A pixel-detailed clone of a premium sneaker brand landing page, focused on typography, product presentation, and micro-interactions.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "nike",
    liveUrl: "https://gawadtamer.github.io/nike/",
    githubUrl: "https://github.com/gawadtamer/nike",
  },
];

export const services = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Building fast, scalable, and maintainable user interfaces using React.js, Vite, and modern JavaScript best practices.",
    icon: "code",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description:
      "Designing layouts that adapt flawlessly across desktop, tablet, and mobile — no broken breakpoints, ever.",
    icon: "responsive",
  },
  {
    id: 3,
    title: "UI Implementation",
    description:
      "Translating designs (Figma or otherwise) into pixel-accurate, accessible, production-ready components.",
    icon: "ui",
  },
  {
    id: 4,
    title: "Website Maintenance",
    description:
      "Ongoing support, bug fixes, performance tuning, and feature updates to keep your website running smoothly.",
    icon: "maintenance",
  },
];

export const socialLinks = [
  { name: "GitHub", url: personalInfo.github, icon: "github" },
  { name: "WhatsApp", url: personalInfo.whatsapp, icon: "whatsapp" },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "email" },
  { name: "Instagram", url: personalInfo.instagram, icon: "instagram" },
  { name: "Facebook", url: personalInfo.facebook, icon: "facebook" },
];
