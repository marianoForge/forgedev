export default {
  head: {
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "favicon/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicon/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "favicon/site.webmanifest",
      },
    ],
  },
  /*loading: { color: "cyan" },*/
  router: {
    middleware: "i18n",
  },
  plugins: [{ src: "~/plugins/i18n.js" }],

  generate: {
    routes: ["/", "/es"],
  },
  css: ["~assets/scss/styles.scss"],
  modules: ["@nuxtjs/svg"],
};
