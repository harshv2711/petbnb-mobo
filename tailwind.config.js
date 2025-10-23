/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Make Bricolage Grotesque your main font
        primary: ["BricolageGrotesque_400Regular"],
        "primary-medium": ["BricolageGrotesque_500Medium"],
        "primary-bold": ["BricolageGrotesque_700Bold"],
      },
      colors:{
        primary:"#ff3e06",
      }
    },
  },
  plugins: [],
}