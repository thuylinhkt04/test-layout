/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#009efe',
      },
      backgroundColor: {
        'primary': '#ffc800',
        'secondary': '#009efe',
      },
      fontFamily: {
        'svn': ['SVN-Product Sans'],
      },
      boxShadow: {
        'card': '0px 6px 36px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

