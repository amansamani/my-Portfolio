/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'letter-anim': {
          '0%, 100%': { 
            textShadow: '0 0 0px transparent', 
            color: 'rgba(255,255,255,0.4)' 
          },
          '50%': { 
            textShadow: '0 0 8px rgba(255,255,255,0.8)', 
            color: '#fff' 
          },
        },
      },
      animation: {
        'letter': 'letter-anim 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}