// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  site: {
    url: "https://drain-flo.com",
    name: "Drain-Flo",
    description:
      "Drain-Flo provides professional drain cleaning, clog removal, sewer line cleaning, emergency drain service, and sewer excavation across Northeastern PA.",
    defaultLocale: "en",
  },
  ssr: false,
  nitro: {
    preset: process.dev ? "node-server" : "static",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico?v=3",
        },
      ],
    },
  },
  ui: {
    colorMode: false,
    theme: {
      colors: ["primary", "secondary", "tertiary"],
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/seo",
  ],
  image: {
    provider: "none",
  },
});
