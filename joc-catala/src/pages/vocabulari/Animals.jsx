import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { fetchVocabulariAnimals } from "../../data/fetchVocabulariGeneral";
import { useAuth } from "../../auth/AuthContext";
import { getProgressAnimal } from "../../firebase/services/progressService";


export default function Animals() {

  const[paraules, setParaules] = useState([]);
  const[carregant, setCarregant] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { usuari } = useAuth();
  const [vistos, setVistos] = useState([]);

  const nivell = searchParams.get('nivell');

  useEffect(() =>{
    fetchVocabulariAnimals("animals").then((dades) => {
      setParaules(dades);
      setCarregant(false);
    })
  }, []);

  useEffect(() => {
    async function carregarProgres() {
      if (usuari) {
        const dades = await getProgressAnimal(usuari.uid)
        setVistos(dades)
      }
    }
    carregarProgres()
  }, [usuari])

  if(carregant){
    return <p>Carregant vocabulari...</p>
  }

  const paraulesFiltrades = nivell 
    ? paraules.filter(paraula => paraula.nivell === nivell) 
    : paraules

  function filtrar(nivell) {
    setSearchParams({ nivell })
  }

  return (
    <div>
      <h3>Vocabulari d'Animals</h3>
      <ul>
        {paraulesFiltrades.map((paraula) => {
          const jaVist = vistos.includes(paraula.id)
        
          return (
            <li key={paraula.id}>
              <span>{jaVist ? 'v' : ''}{ ' ' }</span>
              <Link to={`/vocabulari/animals/${paraula.id}`}>
                {paraula.catala}
              </Link>
            </li>
          )}
        )}
      </ul>
      <h4>Filtrar per nivell</h4>
      <button onClick={() => filtrar('facil')}>Facil</button>
      <button onClick={() => filtrar('mitja')}>Mitja</button>
      <button onClick={() => filtrar('dificil')}>Dificil</button>
      <button onClick={() => setSearchParams({})}>Tots</button>
    </div>
  )
}