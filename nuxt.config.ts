// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  ui: {
    colorMode: false,
    theme: {
      colors: ["primary", "secondary", "tertiary"],
    },
  },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
});
