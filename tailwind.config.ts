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
        gold: {
          400: '#e5b875',
          500: '#d4af37',
          600: '#c39a53',
        },
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