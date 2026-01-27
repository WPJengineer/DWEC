import { useAuth } from "../auth/AuthContext"

export default function Logout() {

  const { usuari, logout } = useAuth();

  return (
    <div>
      { usuari && (
        <button onClick={logout}>Sortir</button>
      ) }
    </div>
  )
}