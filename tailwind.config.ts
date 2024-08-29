import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IntroCond: ['Intro Cond', 'sans-serif'],
        PT: ['PT Sans', 'sans-serif'],
      },

      letterSpacing: {
        'wide-3.3': '3.3px',
        'custom': '1.12px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': { 'max': '500px' },
        'md': { 'max': '851px' },
        'lg': { 'max': '1024px' },
        'xl': { 'max': '1440px' },
        'tv': { 'max': '400px' },
        'll': { 'max': '1485px' },
      },
    },
  },
  plugins: [],
};
export default config;
