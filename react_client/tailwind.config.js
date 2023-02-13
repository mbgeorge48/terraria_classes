module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            colors: {
                melee: "#CC0000",
                ranged: "#1E9682",
                magic: "#920F6F",
                summoner: "#075EFF",
                mixed: "#AFCFE2",
                healer: "#29B360",
                tank: "#D20000",
            },
            fontFamily: {
                sans: ["sans-serif"],
                terraria: ["Terraria"],
            },
        },
        backgroundImage: {
            1: "url('../images/backgrounds/1.png')",
            2: "url('../images/backgrounds/2.png')",
            3: "url('../images/backgrounds/3.png')",
            4: "url('../images/backgrounds/4.png')",
            5: "url('../images/backgrounds/5.png')",
            6: "url('../images/backgrounds/6.png')",
        },
    },
    safelist: [
        "accent-melee",
        "accent-ranged",
        "accent-magic",
        "accent-summoner",
        "accent-mixed",
        "accent-tank",
        "accent-healer",
        "bg-melee",
        "bg-ranged",
        "bg-magic",
        "bg-summoner",
        "bg-mixed",
        "bg-tank",
        "bg-healer",
        "border-melee",
        "border-ranged",
        "border-magic",
        "border-summoner",
        "border-mixed",
        "border-tank",
        "border-healer",
        "decoration-melee",
        "decoration-ranged",
        "decoration-magic",
        "decoration-summoner",
        "decoration-mixed",
        "decoration-tank",
        "decoration-healer",
        "hover:bg-melee",
        "hover:bg-ranged",
        "hover:bg-magic",
        "hover:bg-summoner",
        "hover:bg-mixed",
        "hover:bg-tank",
        "hover:bg-healer",
        "text-melee",
        "text-ranged",
        "text-magic",
        "text-summoner",
        "text-mixed",
        "text-tank",
        "text-healer",
    ],
    plugins: [],
};
