const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
        extend: {
            colors: {
                gray: colors.gray, sky: colors.sky, cyan: colors.cyan,
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("daisyui"),

    ],

}


// Path: index.html

