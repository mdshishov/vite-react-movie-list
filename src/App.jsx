import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import { MovieContextProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    localStorage.setItem('language', i18n.language)
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <MovieContextProvider>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieContextProvider>
  )
}

export default App
