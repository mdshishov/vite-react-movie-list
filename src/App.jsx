import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MovieContextProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  return (
    <MovieContextProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieContextProvider>
  )
}

export default App
