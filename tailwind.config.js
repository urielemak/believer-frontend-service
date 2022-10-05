/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
	colors: {
	    aqua: {
		500: '#64dfdf',
		700: '#5390d9',
	    },

	    purple: {
		500: '#6930c3',
		700: '#7400b8',
	    }
	}
    },
  },
  plugins: [],
}
