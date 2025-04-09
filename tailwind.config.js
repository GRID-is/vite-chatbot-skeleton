/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}", // Make sure this covers your component files
  ],
  theme: {
    extend: {
      // Add custom theme settings here (like colors)
      colors: {
         'input-gray': '#dddddd',
         'input-gray-greenish': '#dbe0db',
      },
    },
  },
  plugins: [],
}
