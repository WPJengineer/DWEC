import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import './Menu.css';
import Logout from "../pages/Logout";

export default function Menu() {

  const { usuari } = useAuth();

  return (
    <nav className='menu'>
      <ul>
        <li>
          <NavLink to="/" className="menu-link">Inici</NavLink>
        </li>
        <li>
          <NavLink to="/vocabulari" className="menu-link">Vocabulari</NavLink>
        </li>
        <li>
          <NavLink to="/preguntes" className="menu-link">Preguntes</NavLink>
        </li>
        <li>
          <NavLink to="/progress" className="menu-link">Progress</NavLink>
        </li>
      </ul>
      { usuari && (
        <Logout />
      )}
    </nav>
  )
}
