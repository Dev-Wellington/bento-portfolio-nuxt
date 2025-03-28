// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/reset.css'],
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
  } 
})