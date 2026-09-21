export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],

  fonts: {
    families: [
      { name: "Playfair Display", provider: "google", weights: [400, 500, 600] },
      { name: "Inter", provider: "google", weights: [400, 500, 600, 700] },
    ],
  },

  runtimeConfig: {
    public: {
      instagramUrl: "https://www.instagram.com/softloft_pilates/",
      facebookUrl: "https://www.facebook.com/SoftLoftpilates",
      phone: "506 44 83 83",
      phoneHref: "tel:+48506448383",
      email: "soft.loft.pilates@gmail.com",
      emailHref: "mailto:soft.loft.pilates@gmail.com",
      address: "ul. Zygmunta Glogera 21, 31-222 Kraków",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=ul.+Zygmunta+Glogera+21%2C+31-222+Krak%C3%B3w",
      googleReviewsUrl: "https://g.page/r/CQm40TIyroUaEBM/review",
      privacyPolicy:
        "https://fitssey-prod-cdn.storage.googleapis.com/uploads/studio/D51D9038-CBC2-4D54-93BE-009F862C3BEE/terms/d8a1967e223e3ae0e4e132884c45e5cae00b8766.pdf",
      regulations:
        "https://fitssey-prod-cdn.storage.googleapis.com/uploads/studio/D51D9038-CBC2-4D54-93BE-009F862C3BEE/terms/84d5fb0a09e319572ee850cf14b04c5995a0f186.pdf",
    },
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "lb-schedule-widget",
    },
  },

  i18n: {
    locales: [
      { code: "pl", iso: "pl-PL", name: "Polski", file: "pl.json" },
      // { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' } // stage II
    ],
    defaultLocale: "pl",
    langDir: "locales/",
  },
});
