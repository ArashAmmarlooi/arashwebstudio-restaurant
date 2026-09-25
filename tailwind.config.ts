import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "var(--bg-primary)",
          "bg-secondary": "var(--bg-secondary)",
          "bg-tertiary": "var(--bg-tertiary)",
          text: "var(--text-primary)",
          "text-muted": "var(--text-muted)",
          "text-faint": "var(--text-faint)",
          gold: "var(--accent-gold)",
          "gold-light": "var(--accent-gold-light)",
          "gold-dark": "var(--accent-gold-dark)",
          border: "var(--border-subtle)",
          "border-gold": "var(--border-gold)",
          card: "var(--card-bg)",
          overlay: "var(--overlay-bg)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        superwide: "0.35em",
        ultra: "0.5em",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
