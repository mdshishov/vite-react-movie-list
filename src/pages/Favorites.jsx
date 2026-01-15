import { useMovieContext } from '../contexts/MovieContext'
import MoviesGrid  from '../components/MoviesGrid'

function Favorites() {
  const { favorites } = useMovieContext()

  if (favorites && favorites.length > 0) {
    return (
      <div className='favorites'>
        <h2>Your favorites</h2>
        <MoviesGrid movies={favorites}/>
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
