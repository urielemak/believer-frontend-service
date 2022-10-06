/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
	  'sm': '576px',
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        aqua: {
          500: "#64dfdf",
          700: "#5390d9",
        },

        purple: {
          500: "#6930c3",
          700: "#7400b8",
        },
      },
    },
  },
  plugins: [],
};
