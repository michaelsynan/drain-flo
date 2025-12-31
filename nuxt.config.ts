// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  ssr: false,
  nitro: {
    preset: "static",
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico?v=2",
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

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
});
