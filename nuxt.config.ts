import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
            { src: "https://pym.nprapps.org/pym.v1.min.js" },    
            ],
        }
    }
})
