export default defineAppConfig({
  siteName: "Nuxt 4 Template",
  siteLogo: "/drain-flo-logo-small-nobg-nav.png",

  ui: {
    colors: {
      primary: "flo",
      secondary: "wrench",
      tertiary: "drain",
      neutral: "zinc",
    },

    button: {
      slots: {
        base: [
          "border-2 border-flo-400 border-bg-flo-200 cursor-pointer rounded-full font-bold px-6 py-3 transition-colors duration-300",
        ],
      },
    },
  },
});
