import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      // Extend start
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },

      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"], // Correct capitalization
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColor: "#1d1c2a",
        inscriptionColor: "#edede9", // Correct capitalization
        textColor: "#FF5A5F", // Correct capitalization
        servicesColor: "#edf2f4", // Correct capitalization
        servicesButtonColor: "#2b2d42", // Correct capitalization
        secondServicesSection: "#d8e2dc", // Correct capitalization
        secondServices: "#F8F1F1", // Correct capitalization
        thirdServices: "#F4F7FE", // Correct capitalization
        fourthServices: "#e3f2fd", // Correct capitalization
        fifthServices: "#fae0e4", // Correct capitalization
        sixthServices: "#eaf4f4", // Correct capitalization
        seventhServices: "#fdf0d5", // Correct capitalization
      },
    },
  },

  plugins: [],
};


export default config;
