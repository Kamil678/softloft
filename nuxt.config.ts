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
      fitsseyUrl: "https://www.fitssey.com/",
      instagramUrl: "https://www.instagram.com/softloft_pilates/",
      facebookUrl: "https://www.facebook.com/SoftLoftpilates",
    },
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
