function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert('clicked')
  }

  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-card__overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            &lt;3
          </button>
        </div>
      </div>
      <div className="movie-card__info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}

export default MovieCard
