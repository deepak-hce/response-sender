module.exports = {
    prefix: "ras-",
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            backgroundColor: {
                common: "var(--commonBgColor)",
            },
            colors: {
                primary: "var(--primaryColor)",
                secondary: "var(--secondaryColor)",
                success: "var(--successColor)",
                warning: "var(--warningColor)",
                danger: "var(--dangerColor)",
                info: "var(--infoColor)",
                light: "var(--lightColor)",
                dark: "var(--darkColor)",
            },
        },
    },
    plugins: [],
};
