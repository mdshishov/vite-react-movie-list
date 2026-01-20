import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import './NavBar.css'

function NavBar() {
  const { t } = useTranslation('translation')
  const activeRoute = useLocation().pathname

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className='navbar__brand-logo'>
          {t('navbar.brand')}
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/" className={`navbar__link ${activeRoute === '/' ? 'active' : ''}`}>
          {t('navbar.home')}
        </Link>
        <Link to="/favorites" className={`navbar__link ${activeRoute === '/favorites' ? 'active' : ''}`}>
          {t('navbar.favorites')}
        </Link>
      </div>
      <div className="navbar__option">
        <LanguageSelector />
      </div>
      <div className="navbar__option">
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default NavBar
