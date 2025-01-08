// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'
import { createResolver } from 'nuxt/kit'
import { definePreset } from '@primevue/themes'

const { resolve } = createResolver(import.meta.url)
const PrimeVuePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: [resolve('./assets/styles/app.css')],
  primevue: {
    options: {
      ripple: false,
      theme: {
        preset: PrimeVuePreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-app-dark',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
      },
    },
    autoImport: true,
    components: {
      prefix: 'P',
    },
  },
})
