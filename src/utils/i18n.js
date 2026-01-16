import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      navbar: { home: 'Home', favorites: 'Favorites' },
      home: {
        pageTitle: 'Movie List',
      },
      favorites: {
        pageTitle: 'Favorites',
      },
    },
  },
  ru: {
    translation: {
      navbar: { home: 'Главная', favorites: 'Избранное' },
      home: {
        pageTitle: 'Каталог фильмов',
      },
      favorites: {
        pageTitle: 'Избранное',
      },
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
