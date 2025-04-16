/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                okra_300: "Okra_300Light",
                okra_400: "Okra_400Regular",
                okra_500: "Okra_500Medium",
                okra_700: "Okra_700Bold",
                okra_900: "Okra_900Black",
            },
        },
    },
    plugins: [],
};
