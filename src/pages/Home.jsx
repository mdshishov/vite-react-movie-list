import { useState, useEffect } from 'react'
import { getPopularMovies, searchMovies } from '../services/api'
import MoviesGrid from '../components/MoviesGrid'
import { useTranslation } from 'react-i18next'
import '../css/Home.css'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoading(true)
        setError(null)

        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }
      catch (e) {
        console.error(e)
        setError('Failed to load movies :(')
      }
      finally {
        setLoading(false)
      }
    }

    document.title = t('home.pageTitle')
    document.documentElement.lang = i18n.language

    loadPopularMovies()
  }, [i18n.language])

  const handleSearch = async (e) => {
    e.preventDefault()
    const query = searchQuery.trim()

    if (!query) return
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await searchMovies(query)
      setMovies(searchResults)
      setError(null)
    }
    catch (e) {
      console.error(e)
      setError('Failed to search movies :(')
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Start searching..."
          className="search-input"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <MoviesGrid movies={movies} />
      )}
    </div>
  )
}

export default Home
