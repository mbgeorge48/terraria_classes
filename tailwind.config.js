module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        melee: "#CC0000",
        ranged: "#1E9682",
        magic: "#920F6F",
        summoner: "#075EFF",
        mixed:"#AFCFE2",
        healer:"#29B360",
        tank:"#D20000",
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'terraria': ["Terraria"],
      },
    },
    backgroundImage: {
      1: "url('../images/backgrounds/1.png')",
      2: "url('../images/backgrounds/2.png')",
      3: "url('../images/backgrounds/3.png')",
      4: "url('../images/backgrounds/4.png')",
      5: "url('../images/backgrounds/5.png')",
      6: "url('../images/backgrounds/6.png')",
      7: "url('../images/backgrounds/7.png')",
      8: "url('../images/backgrounds/8.png')",
      9: "url('../images/backgrounds/9.png')",
    },
  },
  plugins: [],
};
