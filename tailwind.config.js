module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{j,t}sx"],
  theme: {
    scale: {
      "100": "1",
      "101": "1.01",
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [],
};
