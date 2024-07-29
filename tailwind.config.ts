// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        darkGray: '#595858',
        lightGray: '#EEE7E7',
        bgColor: '#D9D9D9',
        customGreen: '#5B714C',
        customOrange: '#F27038',
        nav:'#C4C4C4',
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #595858, #EEE7E7)',
        'gradient-to-r-custom': 'linear-gradient(to right, #5B714C, #F27038)',
        'border-gradient': 'linear-gradient(to right, #5B714C, #F27038)',
      },
      borderImage: {
        'gradient-to-r': 'linear-gradient(to right, #5B714C, #F27038) 1',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config;
