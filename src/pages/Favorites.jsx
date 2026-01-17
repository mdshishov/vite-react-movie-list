import { useMovieContext } from '../contexts/MovieContext'
import MoviesGrid from '../components/MoviesGrid'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

function Favorites() {
  const { favorites } = useMovieContext()

  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('favorites.pageTitle')
  }, [i18n.language])

  if (favorites && favorites.length > 0) {
    return (
      <div className='favorites'>
        <h2>Your favorites</h2>
        <MoviesGrid movies={favorites} />
      </div>
    )
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorites</h2>
      <p>Start adding favorites</p>
    </div>
  )
}

export default Favorites
