module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["var(--font-baloo)"],
        bubblegum: ["var(--font-bubblegum)"],
      },
      screens: {
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
