/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.15)",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(0, 12, 19, 0.6)",
          "400": "rgba(16, 16, 16, 0.8)",
        },
        yellow: "#f3f300",
        orange: "#ee930e",
      },
      spacing: {},
      fontFamily: {
        rajdhani: "Rajdhani",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "11xl": "30px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
