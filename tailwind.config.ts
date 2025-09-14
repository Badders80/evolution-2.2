import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        gray: {
          100: "#f7f7f7",
          200: "#e5e5e5",
          500: "#737373",
          700: "#404040",
          900: "#171717",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      spacing: {
        section: "8rem", // vertical rhythm
      },
    },
  },
  plugins: [],
};

export default config;
