// rfc + enter

// API fetch (nativo de javascript)
// fetch()
// http://localhost:3000/asignaturas

import { useState/*, useEffect, useCallback*/ } from "react";
import { useFetch } from "../hooks/useFetch";
import './AsignaturasLista.css';

export default function AsignaturasLista() {

  const [url, setUrl] = useState('http://localhost:3000/asignaturas');
  // const [asignaturas, setAsignaturas] = useState([]);

  const { datos: asignaturas, cargando, error } = useFetch(url);

  // const fetchAsignaturas = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();

  //   setAsignaturas(json);
  // }, [url]);

  // useEffect(() => {
  //   // fetch(url)
  //   //   .then(response => response.json())
  //   //   .then(json => setAsignaturas(json));
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   fetchAsignaturas();
  // }, [fetchAsignaturas]); //array de dependencia - needs all the components inside to work. Components also need to form part of the fetch function to work, if not it ignores it.

  // console.log("Asignaturas: ", asignaturas);

  return (
    <div className="asignatura-lista">
      <h2>Listado de Asignaturas</h2>
      { cargando && <div>Cargando Asignaturas...</div> }
      { error && <div>{error}</div> }
      <ul>
        { asignaturas && asignaturas.map(asignatura => (
          <li key={asignatura.id}>
            <h3>{asignatura.nombre}</h3>
            <p>Horas Totales: {asignatura["horas totales"]}</p>
          </li>
        ))}
      </ul>
      <div className="filtros">
        <button onClick={() => setUrl('http://localhost:3000/asignaturas?idioma=Ingles')}>Ingles</button>
        <button onClick={() => setUrl('http://localhost:3000/asignaturas')}>Todos</button>
      </div>
    </div>
  )
}
