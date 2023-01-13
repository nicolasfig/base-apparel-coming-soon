/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      desktop: "765px",
    },
    fontFamily: {
      josefin: ['"Josefin Sans"', "sans-serif"],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      semibold: 600,
    },
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        "hero-mobile": "url(./images/hero-mobile.jpg)",
        "hero-desktop": "url(./images/hero-desktop.jpg)",
      },
    },
  },
  plugins: [],
};
