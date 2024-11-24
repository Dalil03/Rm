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
      // extend start

      animation: {
        // animation start
        spotlight: "spotlight 2s ease .75s 1 forwards",
      }, // animation end

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
        }, // spotlight end
      }, // keyframe end

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Ubuntu:["Ubuntu", "sans-serif"]
      }, // fontFamily end

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColor: "#1d1c2a",
        InscriptionColor:"#edede9",
        TextColor:'#FF5A5F',
        ServicesColor:'#edf2f4',
        SevicesButtonColor:"#2b2d42",
        SecondServicesSection:"#d8e2dc",
        SecondServices:'#F8F1F1',
        ThirdServices: "#F4F7FE",
        FourthServices:"#e3f2fd",
        FifthServices:"#fae0e4",
        SixthServices:"#eaf4f4",
        SeventhServices:"#fdf0d5"

      }, // colors end
    }, // Extend End
}, // Theme end

  plugins: [],
};

export default config;
