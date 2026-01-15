import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav class="navbar">
      <div className="navbar-brand">
        <Link to="/">Movies List</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/favorites" className="navbar-link">Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar
