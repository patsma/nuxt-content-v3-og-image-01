export default defineNuxtConfig({
  modules: ['nuxt-og-image', '@nuxt/content'],

  ogImage: {
    defaults: {
      component: 'Custom',
    },
  },

  compatibilityDate: '2024-09-11',
  devtools: { enabled: true },
});
