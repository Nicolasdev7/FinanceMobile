/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Azul claro vibrante (similar ao brilho do verde anterior)
          dark: '#2563EB',
          light: '#93C5FD',
        },
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
