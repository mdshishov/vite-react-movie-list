import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useMovieContext } from '@/contexts/MovieContext'
import MoviesGrid from '@/components/MoviesGrid/MoviesGrid'
import './Favorites.css'

function Favorites() {
  const { favorites } = useMovieContext()

  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('favorites.pageTitle')
  }, [i18n.language])

  return (
    <div className='favorites'>
      {favorites && favorites.length > 0 ? (
        <MoviesGrid movies={favorites} />
      ) : (
        <div className="no-favs-message">
          {t('favorites.noFavs')}
        </div>
      )}
    </div>
  )
}

export default Favorites
