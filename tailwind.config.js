/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        textDark: 'var(--color-text-dark)',
        subtext: 'var(--color-text-sub)',
        subtextDark: 'var(--color-text-sub-dark)',
        bg: 'var(--color-background)',
        bgDark: 'var(--color-background-dark)',
        subbg: 'var(--color-background-sub)',
        subbgDark: 'var(--color-background-sub-dark)',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
