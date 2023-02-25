module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 35px 35px rgba(0, 0, 0, 0.45)",
      },
      colors: {
        "correct": "#66A060",
        "exist": "#CEB02C",
        "wrong": "#939B9F",
        "navbar": "#F3F3F3",
        "empty": "rgba(147, 155, 159, 0.3)",
        "keyboard-letter": "#56575E",
        "keyboard-full": "rgba(218, 220, 224, 0.3)",
        "glass": "rgba(243, 243, 243, 0.89)",
        "dark1": "#262B3C",
        "dark2": "rgba(218, 220, 224, 0.03)",
        "dark3": "#DADCE0",
        "dark4": "rgba(147, 155, 159, 0.2)",
        "dark5": "#565F7E",
        "dark6": "#818181",
        "dark7": "#262B3C",
        "dark-glass": "rgba(38, 43, 60, 0.89)"
      },
      width: {
        128: "35rem",
      },
      height: {
        128: "35rem",
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      screens: {
        'sm': '500px',
      },
      fontSize: {
        'title': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '0.075em',
          fontWeight: '600',
        }],
      }
    },
  },
  plugins: [],
};
