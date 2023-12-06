/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                textMain: colors.black,
                textMainDark: colors.white,
                textSecond: colors.gray[500],
                textSecondDark: colors.gray[400],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
