/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070d",
          900: "#0a0e17",
          800: "#10151f",
          700: "#171d2b",
          600: "#232b3d",
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-signature":
          "linear-gradient(120deg, #22d3ee 0%, #8b5cf6 50%, #ec4899 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.35)",
        glowCyan: "0 0 40px rgba(34,211,238,0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
