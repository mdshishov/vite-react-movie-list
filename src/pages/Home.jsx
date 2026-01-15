import { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const movies = [
    { id: 1, title: 'Movie 1', description: 'Boring movie' },
    { id: 1, title: 'Movie 2', description: 'Interesting movie' },
    { id: 1, title: 'Movie 3', description: 'Dull movie' },
    { id: 1, title: 'Movie 4', description: 'Stupid movie' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
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
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
