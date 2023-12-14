/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00123f',
        'custom-blue': '#5558bc',
        'custom-red': '#ff6475',
        'custom-gray': '#f9f8fa',
        'custom-dark-gray': '#acacb3',
      },
    },
  },
  plugins: [],
}

