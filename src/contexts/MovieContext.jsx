import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieContextProvider = ({ children }) => {
  const storedFavs = localStorage.getItem('favorites')
  const [favorites, setFavorites] = useState(storedFavs ? JSON.parse(storedFavs) : [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFavorite = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavorite = (movieId) => favorites.some(movie => movie.id === movieId)

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}
