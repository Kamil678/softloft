// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/image'],
  css: ['~/assets/css/main.css'],

  // Stage I: PL only. Structure is ready to add EN in stage II without rebuilding routing.
  i18n: {
    locales: [
      { code: 'pl', iso: 'pl-PL', name: 'Polski', file: 'pl.json' }
      // { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' } // stage II
    ],
    defaultLocale: 'pl',
    langDir: 'locales/',

    // Page filenames are in English; URLs stay Polish for local SEO/UX.
    customRoutes: 'config',
    pages: {
      about: { pl: '/o-studio' },
      offer: { pl: '/oferta' },
      booking: { pl: '/zapisy' },
      reviews: { pl: '/opinie' },
      partners: { pl: '/wspolpraca' },
      contact: { pl: '/kontakt' }
    }
  }
})