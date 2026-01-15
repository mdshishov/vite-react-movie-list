import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        favorites: 'Favorites',
        searchPlaceholder: 'Start searching...',
        searchBtn: 'Search'
      },
      home: {},
      favorites: {},
    },
  },
  ru: {
    translation: {
      navbar: { home: 'Главная', favorites: 'Избранное', searchPlaceholder: 'Start searching...' },
      home: {},
      favorites: {},
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
