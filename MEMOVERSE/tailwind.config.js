/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{jsx,js,tsx,ts}",],
  theme: {
    extend: {
      backgroundImage: {
        gradientLight: "linear-gradient(137deg, rgba(255, 255, 255, 0.2) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
        gradientCard: "linear-gradient(#130B2B, #130B2B), linear-gradient(100deg, #B089BA, #3A2B61)",
      }
    },
  },
  screens: {
    tablet: "640px",
    laptop: "1366px",
  },
  plugins: [],
}

