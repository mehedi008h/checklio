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
                barlow_300: "Barlow_300Light",
                barlow_400: "Barlow_400Regular",
                barlow_500: "Barlow_500Medium",
                barlow_600: "Barlow_600SemiBold",
                barlow_700: "Barlow_700Bold",
                barlow_900: "Barlow_900Black",
            },
        },
    },
    plugins: [],
};
