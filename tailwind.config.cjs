/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/**.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'react-color': '#61DBFB',
            },
            backgroundImage: {
                Icsun: "url('./src/asset/sunny.png')",
                Icmoon: "url('./src/asset/half-moon.png')",
            },
            fontFamily: {
                poppins: ['poppins', 'sans-serif'],
            },
            animation: {
                '0%, 100%': { transform: 'rotate(-3deg)' },
                '50%': { transform: 'rotate(3deg)' },
            },
        },
    },
    plugins: [],
}
