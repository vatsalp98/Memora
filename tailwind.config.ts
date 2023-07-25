/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary:
          "0 0 5px theme('colors.light'), 0 0 20px theme('colors.primary')",
        profile:
          "0 0 5px theme('colors.light'), 0 0 20px theme('colors.profile')",
        customBlue:
          "0 0 5px theme('colors.blue.500'), 0 0 20px theme('colors.blue.400')",
      },
      fontFamily: {
        sans: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        profile: "#1B272F",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#S8E6D9",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
} satisfies Config;
