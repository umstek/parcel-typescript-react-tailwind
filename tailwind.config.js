module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        100: "1",
        101: "1.01",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
