import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import vocabulariAnimals from "../../data/vocabulariGeneral"
import { guardaProgresAnimal } from "../../firebase/services/progressService";
import { useAuth } from "../../auth/AuthContext";

export default function AnimalDetall() {

  const { id } = useParams();
  const navigate = useNavigate();

  const animal = vocabulariAnimals.find(
    (a) => a.id === Number(id)
  )

  const { usuari } = useAuth();

  useEffect(() => {
    if(usuari && animal) {
      guardaProgresAnimal(usuari.uid, animal.id)
    }
  }, [usuari, animal])

  if(!animal){
    return <p>Animal no trobat</p>
  }

  return (
    <div>
      <h3>Fitxa de l'animal</h3>
      <p>En català: {animal.catala}</p>
      <p>En castellà: {animal.castella}</p>

      <button onClick={() => navigate('/vocabulari/animals')}>Tornar a la llista</button>
    </div>
  )
}
