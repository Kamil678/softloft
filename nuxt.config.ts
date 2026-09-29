export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],

  image: {
    quality: 75,
  },

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
      address: "ul. Zygmunta Glogera 21/LU1, 31-222 Kraków",
      directionsUrl: "https://maps.app.goo.gl/axDhGxrEqXM4JmVy5",
      // Zapytanie do osadzonej mapy Google (iframe nie obsługuje krótkich linków maps.app.goo.gl) - nazwa wizytówki + adres, żeby pinezka wskazywała to samo miejsce co directionsUrl
      mapQuery: "Soft Loft Pilates Reformer Studio, Zygmunta Glogera 21, 31-222 Kraków",
      googleReviewsUrl: "https://g.page/r/CQm40TIyroUaEBM/review",
      privacyPolicy: "/docs/Polityka_Prywatnosci_i_Monitoringu_Soft_Loft.pdf",
      regulations: "/docs/Regulamin_Soft_Loft_Pilates.pdf",
      imageConsent: "/docs/Oświadczenie_i_ Zgoda_Na_Wykorzystanie_Wizerunku_Kienta.pdf",
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "pl" },
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
