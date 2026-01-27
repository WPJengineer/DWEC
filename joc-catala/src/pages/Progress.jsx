import { useEffect, useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { getProgressAnimal } from "../firebase/services/progressService"
import vocabulariAnimals from "../data/vocabulariGeneral"

useEffect

export default function Progress() {

  const { usuari } = useAuth();
  const [vistos, setVistos] = useState([]);

  useEffect(() => {
    async function carregarProgres() {
      if (usuari) {
        const dades = await getProgressAnimal(usuari.uid)
        setVistos(dades)
      }
    }
    carregarProgres();
  }, [usuari])

  const total = vocabulariAnimals.length
  const visitas = vistos.length

  return (
    <div>
      <h2>Progres</h2>
      <p>Animals vistos: {visitas} / {total}</p>

      <ul>
        {
          vocabulariAnimals.map((a) => (
            <li key={a.id}>
              {vistos.includes(a.id) ? 'V' : ''} {a.catala}
            </li>
          ))
        }
      </ul>

    </div>
  )
}
