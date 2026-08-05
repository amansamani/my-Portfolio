/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFACD", // Lemon Chiffon
        pine: "#B81104",  // Milano Red
        card: "#FFFDF4",  // soft lemon-white
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        accent: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        "ping-slow": "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};