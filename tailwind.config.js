module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#5BC0EB",
        light: "#E3F2FD",
        dark: "#002B5B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
