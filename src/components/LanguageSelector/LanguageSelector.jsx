import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import './LanguageSelector.css'

function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const { i18n } = useTranslation()
  const ddRef = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (ddRef.current && !ddRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener("click", handler)

    return () => {
      document.removeEventListener("click", handler)
    }
  }, [ddRef])

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
  ]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    toggleList()
  }

  const toggleList = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className="dd" ref={ddRef}>
      <button className="dd__button" onClick={toggleList}>{i18n.language.toUpperCase()}</button>
      {open && (
        <div className="dd__list">
          {languages.map(({ code, name }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="dd__option"
            >
              {name}
              <span className='lang-code'>{code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
