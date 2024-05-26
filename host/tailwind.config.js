/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [{ pattern: /^.*$/ }],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

