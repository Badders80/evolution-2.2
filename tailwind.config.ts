import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS configuration for Evolution-2.2.  
 * Defines the content paths for class scanning and custom theme tokens for
 * colours and fonts in accordance with the brand guidelines.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4a964',
        gray: '#747474',
        background: '#000000',
        foreground: '#ffffff',
      },
      fontFamily: {
        'bw-gradual': ['Bw Gradual', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;