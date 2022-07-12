module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        melee: "#CC0000",
        ranged: "#1E9682",
        magic: "#920F6F",
        summoner: "#075EFF",
      },
      fontFamily: {
        Terraria: ['Terraria'],
      },
    },
    backgroundImage: {
      '1': "url('./images/1.png')",
      '2': "url('./images/2.png')",
      '3': "url('./images/3.png')",
      '4': "url('./images/4.png')",
      '5': "url('./images/5.png')",
      '6': "url('./images/6.png')",
      '7': "url('./images/7.png')",
      '8': "url('./images/8.png')",
      '9': "url('./images/9.png')",
    },
  },
  plugins: [],
}