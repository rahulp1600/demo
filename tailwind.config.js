/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyan: {
                    400: '#00f6ff',
                    500: '#00d8e4',
                }
            }
        },
    },
    plugins: [],
}
