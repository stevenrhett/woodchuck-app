module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
        screens: {
            'sm': {'min': '375px', 'max': '768px'}, 'lg': {'min': '769px', 'max': '2400px'},
        },
    }, plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require("daisyui")],
};




