/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["cantarell", ...defaultTheme.fontFamily.sans],
                azonix: [
                    "azonix",
                    "'cantarell'",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                primary: "#4f4f4f",
                secondary: "#1e1e1e",
                accents: "#ff2828",
                border: colors.gray[700],
                text: colors.gray[100],
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
