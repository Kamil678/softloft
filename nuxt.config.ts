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
      // TODO: uzupełnić, gdy klientka utworzy grafik zajęć w Fitssey i wygeneruje kod widżetu (Krok 2 w panelu Fitssey)
      fitsseyWidgetUuid: "",
      instagramUrl: "https://www.instagram.com/softloft_pilates/",
      facebookUrl: "https://www.facebook.com/SoftLoftpilates",
      phone: "506 44 83 83",
      phoneHref: "tel:+48506448383",
      email: "soft.loft.pilates@gmail.com",
      emailHref: "mailto:soft.loft.pilates@gmail.com",
      address: "ul. Zygmunta Glogera 21, 31-222 Kraków",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=ul.+Zygmunta+Glogera+21%2C+31-222+Krak%C3%B3w",
      googleReviewsUrl: "https://g.page/r/CQm40TIyroUaEBM/review",
    },
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          key: "fitssey-base",
          innerHTML: `(function(i,s,o,g,r,a,m){i['FitsseyWidget']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,
'script',
'https://app.fitssey.com/assets/js/lb.widget.prod.js',
'lb');
lb('init','SoftLoft');`,
          tagPosition: "bodyClose",
        },
      ],
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
