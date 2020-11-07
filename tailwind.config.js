module.exports = {
  theme: {
    extend: {
      colors: {
        "blowhorn-cyan": "#00d2f6",
        "blowhorn-cyan-dark": "#3388a7",
        fb: "#2A457E",
        google: "#DB4432",
        "gray-50": "#F9FAFB"
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "100": "28rem",
        "128": "32rem",
        "132": "40rem"
      }
    },
    fontFamily: {
      sans: [
        "Avenir",
        "Roboto",
        "Product Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Ubuntu",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      "hooper/dist/hooper.css",
      "vue-cool-lightbox/dist/vue-cool-lightbox.min.css"
    ]
  }
};
