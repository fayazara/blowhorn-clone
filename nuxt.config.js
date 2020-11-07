const title = "Blowhorn Mini - Trucks on hire";
const description =
  "Simpler, Swifter, Smarter; Tempo service, Book my Mini Truck, Transport within Bengaluru/Hyderabad/Chennai/Mumbai/Delhi";
const url = "https://blowhorn-clone.vercel.app";
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/modal.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    //https://www.npmjs.com/package/nuxt-lazy-load
    "nuxt-lazy-load",
    //https://www.npmjs.com/package/@nuxtjs/toast
    "@nuxtjs/toast",
    //https://www.npmjs.com/package/nuxt-webfontloader
    "nuxt-webfontloader"
  ],
  webfontloader: {
    google: {
      families: ["Product Sans:400,700"]
    }
  },
  toast: {
    position: "bottom-center",
    duration: 5000
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
