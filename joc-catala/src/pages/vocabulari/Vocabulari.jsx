import { NavLink, Outlet } from "react-router-dom"
import './Vocabulari.css'

export default function Vocabulari() {
  return (
    <div>
      <h2>Vocabulari</h2>
      
      <nav className="sub-menu">
        <NavLink to="animals" className="sub-link">Animals</NavLink>
        <NavLink to="menjars" className="sub-link">Menjars</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
