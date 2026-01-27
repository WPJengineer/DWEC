import { useAuth } from "./AuthContext"
import { Navigate } from "react-router-dom";

export default function RutaProtegida({ children }) {

  const { usuari, carregant } = useAuth();

  if(carregant) {
    return <p>Comprovant la sessio...</p>
  }

  if(!usuari) {
    return <Navigate to="/login" replace />
  }

  return (
    children
  )
}
