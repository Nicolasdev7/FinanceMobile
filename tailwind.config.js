/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#29E0A9',
          dark: '#05C293',
          light: '#6FFFD4',
        },
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
