import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAF9F5",
          surface: "#F4F1E8",
          card: "#FFFFFF",
          border: "#E5E0D5",
          "border-subtle": "#ECE8DF",
          charcoal: {
            DEFAULT: "#141716",
            muted: "#555D59",
            light: "#2B322F",
          },
          botanical: {
            DEFAULT: "#2B5640",
            hover: "#214432",
            subtle: "#EFF5F1",
            border: "#C8DCCF",
            accent: "#43785D",
          },
          warm: {
            cream: "#F7F5EE",
            sand: "#EBE6DA",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
