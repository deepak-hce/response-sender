module.exports = {
    prefix: "ras-",
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            height: {
                "full-vh": "100vh",
            },
            width: {
                "full-vw": "100vw",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        prefix: "d-",
    },
};
