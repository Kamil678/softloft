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
    langDir: 'locales/'
    // Route mapping for the full site (about/offer/booking/reviews/partners/contact)
    // lives on master — this branch only ships the coming-soon page.
  }
})