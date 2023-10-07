const {
  nextui
} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

  },
  
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              pink: {
                50: "#FEE7EF",
                100: "#FDD0DF",
                200: "#FAA0BF",
                300: "#F871A0",
                400: "#F54180",
                500: "#F31260",
                600: "#C20E4D",
                700: "#920B3A",
                800: "#610726",
                900: "#310413"
              },
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            font:{
              colors:{
                black100: "#cccccc",
                black200: "#999999",
                black300: "#666666",
                black400: "#333333",
                black500: "#000000",
                black600: "#000000",
                black700: "#000000",
                black800: "#000000",
                black900: "#000000",
              },
            }

          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              pink: {
                50: "#FEE7EF",
                100: "#FDD0DF",
                200: "#FAA0BF",
                300: "#F871A0",
                400: "#F54180",
                500: "#F31260",
                600: "#C20E4D",
                700: "#920B3A",
                800: "#610726",
                900: "#310413"
              },
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            font:{
              colors:{
                black100: "#cccccc",
                black200: "#999999",
                black300: "#666666",
                black400: "#333333",
                black500: "#000000",
                black600: "#000000",
                black700: "#000000",
                black800: "#000000",
                black900: "#000000",
              },
            }

          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
}