# Gawad Tamer — Portfolio Website

A premium, modern, single-page developer portfolio built with **React + Vite + Tailwind CSS**, featuring a dark glassmorphism theme, smooth Framer Motion animations, a typing-effect hero, animated particle background, custom cursor, and a fully responsive layout.

**Gawad Tamer Abdel Fattah Sharara** — جواد تامر عبد الفتاح شرارة
Front-End Developer · React Developer · Web Developer

---

## ✨ Features

- Dark theme with gradients & glassmorphism
- Animated hero with floating profile image + typing effect (Front-End Developer / React Developer / Web Developer)
- Canvas-based animated particle background
- Custom cursor effect (desktop only)
- Sticky glass navbar with active-link indicator + mobile menu
- Loading screen on first load
- Scroll-to-top button
- About, Skills (animated progress bars), Projects, Services, Contact, Footer sections
- Scroll-reveal animations powered by Framer Motion
- SEO meta tags (title, description, Open Graph, Twitter card)
- Fully responsive: desktop, tablet, mobile
- Clean, reusable component structure with all content centralized in `src/data/data.js`

## 🛠 Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll
- Typewriter Effect (typewriter-effect)
- HTML5 / CSS3 / JavaScript (ES6+)

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # profile.jpg and other images
├── components/          # Navbar, Loader, ParticlesBackground, CustomCursor,
│                         # ScrollToTop, SectionHeading, SocialIcons,
│                         # SkillCard, ProjectCard, ServiceCard
├── sections/             # Hero, About, Skills, Projects, Services, Contact, Footer
├── data/
│   └── data.js           # ALL portfolio content lives here (edit this file!)
├── hooks/                # useActiveSection, useScrollPosition
├── App.jsx
├── main.jsx
└── index.css
public/
├── cv/Gawad-Tamer-CV.pdf  # placeholder CV — replace with your real CV
├── favicon.svg
└── og-image.jpg
```

## 🚀 Getting Started

1. Extract this ZIP file and open the folder in **VS Code**.
2. Open a terminal in the project folder and install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The site will be available at the local URL shown in the terminal (usually `http://localhost:5173`).

4. Build for production:

   ```bash
   npm run build
   ```

   The optimized production files will be generated in the `dist/` folder.

5. Preview the production build locally:

   ```bash
   npm run preview
   ```

## ✏️ Customizing Content

Almost everything you'll want to change (name, roles, skills, projects, services, contact info, social links) lives in a single file:

```
src/data/data.js
```

Just edit the values there — no need to touch the components.

### Replace the CV file

Replace `public/cv/Gawad-Tamer-CV.pdf` with your real CV (keep the same file name, or update `cvUrl` in `src/data/data.js`).

### Replace the profile photo

Swap `src/assets/images/profile.jpg` with a new image (keep the same file name, or update the import in `src/sections/Hero.jsx`).

### Add real project screenshots

Project preview cards currently use stylized gradient placeholders. To use real screenshots, drop images into `src/assets/images/`, import them in `src/components/ProjectCard.jsx`, and render an `<img>` instead of the emoji glyph.

## 📇 Contact Info Included

- Phone / WhatsApp: +20 01050204024
- Email: gawadtamer719@gmail.com
- GitHub: https://github.com/gawadtamer

---

© 2026 Gawad Tamer Abdel Fattah Sharara. All Rights Reserved.
