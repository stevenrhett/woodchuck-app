module.exports = {
    darkMode: ['class', '[data-mode="dark"]'], content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
        screens: {
            'sm': {'min': '370px', 'max': '745px'}, 'lg': {'min': '746px', 'max': '2400px'},
        },
    }, plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require("daisyui")],
};




