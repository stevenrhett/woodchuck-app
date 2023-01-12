/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                '': colors,
                sky: colors.sky,
                cyan: colors.cyan,
            },
        },
    },

    plugins: [require("daisyui"),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),

    ],

}


// Path: index.html

