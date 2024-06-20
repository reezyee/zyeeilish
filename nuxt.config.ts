// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // modules: ['@nuxtjs/tailwindcss'],
  // css: ["bootstrap/dist/css/bootstrap.min.css"],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/supabase'

  ],
  supabase: {
    redirect: false
  },
})
