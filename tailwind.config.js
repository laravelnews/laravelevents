const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        "./resources/js/**/*.js",
        "./resources/js/**/*.vue",
        "./resources/views/**/*.blade.php",
    ],
    theme: {
        colors: {
            primary: "#f4645f",
            black: "rgb(42,42,42)",
            "black-50": "rgba(42,42,42, .5)",
            ...colors,
        },
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/ui")],
};
