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
      fontFamily: {
        "bw-gradual": ["Bw Gradual", "serif"], // Will fallback to serif if not available
        "ibm-plex": ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        gold: "#d4a964",
        gray: "#747474",
        background: "#000000",
        foreground: "#ffffff",
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
