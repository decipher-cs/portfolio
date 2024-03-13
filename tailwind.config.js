/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                customBlack: '#4f4f4f',
                customRed: '#ff2828',
            },
            keyframes: {
                horizontalScroll: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                horizontalScroll: 'horizontalScroll linear 10s infinite',
            },
        },
    },
    plugins: [],
};
