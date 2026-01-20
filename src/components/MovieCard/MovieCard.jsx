import { useMovieContext } from '@/contexts/MovieContext'
import HeartEmptyIcon from '@/icons/HeartEmpty'
import HeartFilledIcon from '@/icons/HeartFilled'
import './MovieCard.css'

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFavorite(movie.id)
    else addFavorite(movie)
  }

  return (
    <div className="movie-card">
      <button className={`movie-card__favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
        {favorite ? <HeartFilledIcon /> : <HeartEmptyIcon />}
      </button>
      <div className="movie-card__poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__date">{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard
