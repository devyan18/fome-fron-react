import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul>
        <li className="nav-item">
          <NavLink className={({ isActive }) => {
            return isActive ? 'nav-link active' : 'nav-link'
          }} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => {
            return isActive ? 'nav-link active' : 'nav-link'
          }} aria-current="page" to="/projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => {
            return isActive ? 'nav-link active' : 'nav-link'
          }} aria-current="page" to="/server">Server</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
