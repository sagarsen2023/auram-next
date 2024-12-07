import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        secondary: "#d2a83e",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "increase-width": {
          "0%": { width: "0", height: "0", opacity: "0.5" },
          "50%": { width: "150rem", height: "150rem", opacity: "0.7" },
          "100%": { width: "300rem", height: "300rem", opacity: "0" },
        },
        typewriter: {
          "0%": { width: "0" },
          "1%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#b3c002" },
        },
      },
      animation: {
        "increase-width": "increase-width 2.2s forwards",
        typewriter:
          "typewriter 5s steps(20, end) forwards, blink 0.5s step-end infinite",
      },
      boxShadow: {
        black: "0px 0px 15px #000",
        gray: "0px 0px 10px #b0b0b0",
      },
    },
  },
  plugins: [],
} satisfies Config;
