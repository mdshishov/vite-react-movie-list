import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { getPopularMovies, searchMovies } from '@/services/api'
import MoviesGrid from '@/components/MoviesGrid/MoviesGrid'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import SearchIcon from '@/icons/Search'
import LoadingIcon from '@/icons/Loading'
import './Home.css'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const { t, i18n } = useTranslation()

  const loadPopularMovies = async () => {
    try {
      setLoading(true)
      setError(null)

      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
    }
    catch (e) {
      console.error(e)
      setError(t('home.errorLoad'))
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = t('home.pageTitle')
    loadPopularMovies()
  }, [i18n.language])

  const handleSearch = async (e) => {
    e.preventDefault()
    const query = searchQuery.trim()

    if (!query) {
      loadPopularMovies()
      return
    }
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await searchMovies(query)
      setMovies(searchResults)
      setError(null)
    }
    catch (e) {
      console.error(e)
      setError(t('home.errorSearch'))
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <div className="search-container">
        <form onSubmit={handleSearch} className={`search ${searchFocused ? 'focused' : ''}`}>
          <input
            type="text"
            placeholder={t('home.searchPlaceholder')}
            className="search__input"
            name="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <button type="submit" className="search__button">
            <SearchIcon />
          </button>
        </form>
      </div>

      {error && (
        <div className='centering-container'>
          <div className="error-container">
            <ErrorMessage message={error} />
          </div>
        </div>
      )}

      {loading ? (
        <div className='centering-container'>
          <div className="loading" >
            <LoadingIcon />
          </div>
        </div>
      ) : (
        <MoviesGrid movies={movies} />
      )}
    </div>
  )
}

export default Home
