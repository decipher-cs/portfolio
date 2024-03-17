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
                customBlack: "#4f4f4f",
                customBlackDark: "#1e1e1e",
                customRed: "#ff2828",
                customBorder: colors.gray[700],
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
