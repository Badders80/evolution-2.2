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
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px", // custom — cap content width
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gold: "#d4a964", // brand gold
        gray: "#747474", // secondary text / muted
        background: "#000000", // brand black
        foreground: "#ffffff", // brand white
      },
      fontFamily: {
        "bw-gradual": ["Bw Gradual", "sans-serif"],
        "ibm-plex": ["IBM Plex Sans", "sans-serif"],
      },
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        112: "28rem", // 448px
        128: "32rem", // 512px
      },
      height: {
        "screen-80": "80vh",
        "screen-90": "90vh",
      },
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
