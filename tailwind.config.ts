import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4a964", // brand gold
        gray: {
          300: "#747474", // secondary text / muted
          DEFAULT: "#747474",
        },
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        heading: ["'Bw Gradual'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        8: "64px",
        10: "80px",
        12: "96px",
        16: "128px",
        20: "160px",
        24: "192px",
      },
      fontSize: {
        // optional: custom font sizes following scale
        "heading-xl": ["3rem", { lineHeight: "1.2" }], // 48px
        "heading-2xl": ["4rem", { lineHeight: "1.2" }], // 64px + adjust
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
