// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-echarts', 'nuxt-headlessui'],
  headlessui: {
    prefix: 'Hl'
  },
  css:[
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *; @use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
