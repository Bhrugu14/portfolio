/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                Icsun: "url('./src/asset/sunny.png')",
                Icmoon: "url('./src/asset/half-moon.png')",
            },
        },
    },
    plugins: [],
}
