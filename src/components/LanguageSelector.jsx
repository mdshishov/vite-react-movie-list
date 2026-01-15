import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { t, i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
  ]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
  }

  return (
    <div>
      {languages.map(({ code, name }) => (
        <button key={code} onClick={() => changeLanguage(code)}>
          {name}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
