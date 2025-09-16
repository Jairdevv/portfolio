import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-10": "var(--primary-10)",
        "primary-20": "var(--primary-20)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-80": "var(--foreground-80)",
        "primary-glow": "var(--color-primary-glow)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
      },
      backgroundColor: {
        "background-90": "var(--background-90)",
      },
      borderColor: {
        "primary-30": "var(--primary-30)",
      },
      boxShadow: {
        primary: "var(--shadow-primary)",
        glow: "var(--shadow-glow)",
        elegant: "var(--shadow-elegant)",
        card: "var(--shadow-card)",
      },
      borderRadius: {
        "4xl": "var(--radius-4xl)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
  darkMode: "class",
};
