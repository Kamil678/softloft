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
      phone: "506 448 383",
      phoneHref: "tel:+48506448383",
      email: "soft.loft.pilates@gmail.com",
      emailHref: "mailto:soft.loft.pilates@gmail.com",
      address: "ul. Zygmunta Glogera 21, 31-222 Kraków",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=ul.+Zygmunta+Glogera+21%2C+31-222+Krak%C3%B3w",
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
