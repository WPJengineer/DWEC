import { NavLink, Outlet } from "react-router-dom";

export default function Preguntes() {
  return (
    <div>
      <h2>Preguntes i Respostes</h2>
      
      <nav className="sub-menu">
        <NavLink to="preguntes-principals" className="sub-link">Preguntes Principals</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
