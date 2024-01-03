module.exports = {
    content: ["./src/**/*.{js,html}"],
    theme: {
        extend: {
            fontFamily: {
                // Replace 'sans' with your desired font family name
                sans: ["Roboto", "sans-serif"],
            },
            backgroundColor: {
                // Define your custom background color
                'smoke-white': '#F5F5F5', // Example color code for smoke white
            },
        },
    },
    plugins: [],
};
