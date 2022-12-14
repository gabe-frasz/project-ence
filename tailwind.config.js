/** @type {import(tailwindcss).Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: "Epilogue, sans-serif",
        emphasis: "Fraunces, sans-serif",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("tailwind-scrollbar"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#22223B",
          secondary: "#E5F2C9",
          accent: "#9A8C98",
          neutral: "#000000",
          "base-100": "#F2F2F8",
          "base-content": "#000000",
        },
      },
      // {
      //   dark: {
      //     primary: "#22223B",
      //     secondary: "#4A4E69",
      //     accent: "#9A8C98",
      //     neutral: "#000000",
      //     "base-100": "#22223B",
      //     "base-content": "#FFFFFF",
      //   },
      // },
    ],
  },
};
