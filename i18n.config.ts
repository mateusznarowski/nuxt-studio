import { defineI18nConfig } from '#imports'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
    },
    fr: {
      welcome: 'Bienvenue',
    },
    fa: {
      welcome: 'خوش آمدید',
    },
  },
}))
