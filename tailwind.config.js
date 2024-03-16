/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBlack: "#4f4f4f",
                customRed: "#ff2828",
            },
            keyframes: {
                horizontalScroll: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                horizontalScroll: "horizontalScroll linear 40s infinite",
            },
        },
    },
    plugins: [],
}
