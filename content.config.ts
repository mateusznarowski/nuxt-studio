import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      }
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: ''
      }
    }),
    content_fa: defineCollection({
      type: 'page',
      source: {
        include: 'fa/**',
        prefix: ''
      }
    })
  }
})
