import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      navbar: { brand: 'ML', home: 'Home', favorites: 'Favorites' },
      home: {
        pageTitle: 'Movie List',
        errorLoad: 'Failed to load movies',
        errorSearch: 'Failed to search movies',
      },
      favorites: {
        pageTitle: 'Favorites',
      },
    },
  },
  ru: {
    translation: {
      navbar: { brand: 'КФ', home: 'Главная', favorites: 'Избранное' },
      home: {
        pageTitle: 'Каталог фильмов',
        errorLoad: 'Возникла ошибка при загрузке фильмов',
        errorSearch: 'Возникла ошибка при поиске фильмов',
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
    lng: localStorage.getItem('language') || 'ru',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
