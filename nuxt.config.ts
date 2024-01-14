// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },
  modules: ["@unocss/nuxt", "@nuxt/image"],
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
  },
  experimental: {
    viewTransition: true,
  },
});
