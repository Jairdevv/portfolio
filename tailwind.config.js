import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-5": "var(--primary-5)",
        "primary-10": "var(--primary-10)",
        "primary-20": "var(--primary-20)",
        "primary-30": "var(--primary-30)",
        "primary-80": "var(--primary-80)",
        background: "var(--background)",
        "background-50": "var(--background-50)",
        foreground: "var(--foreground)",
        "foreground-80": "var(--foreground-80)",
        "muted-foreground": "var(--muted-foreground)",
        "primary-glow": "var(--color-primary-glow)",
        "primary-glow-10": "var(--color-primary-glow-10)",
        "primary-glow-30": "var(--color-primary-glow-30)",
        "primary-glow-60": "var(--color-primary-glow-60)",
        overlay: "var(--color-overlay)",
        secondary: "var(--secondary)",
        "secondary-50": "var(--secondary-50)",
        "secondary-70": "var(--secondary-70)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
      },
      backgroundColor: {
        "background-90": "var(--background-90)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
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
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
  darkMode: "class",
};
