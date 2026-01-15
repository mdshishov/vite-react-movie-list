import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LanguageSelector from './LanguageSelector'

function NavBar() {
  const { t } = useTranslation('translation')

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movies List</Link>
      </div>
      <LanguageSelector />
      <div className="navbar-links">
        <Link to="/" className="navbar-link">{t('navbar.home')}</Link>
        <Link to="/favorites" className="navbar-link">{t('navbar.favorites')}</Link>
      </div>
    </nav>
  )
}

export default NavBar
