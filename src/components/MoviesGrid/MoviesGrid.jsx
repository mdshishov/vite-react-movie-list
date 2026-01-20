import MovieCard from '@/components/MovieCard/MovieCard'
import './MoviesGrid.css'

function MoviesGrid({ movies }) {
  return (
    <div className="movies-grid">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default MoviesGrid
