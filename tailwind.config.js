/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myViolet: 'var(--myViolet)',
        bg: 'var(--bg)',
        text: 'var(--text)',
        myBlack: 'var(--myBlack)',
        projectBg: 'var(--projectBg)',
      },
    },
    fontFamily: {
      jb: ['Lexend Giga', 'serif'],
    },
  },
  plugins: [],
};
