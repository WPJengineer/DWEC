import { useState } from 'react';
import './App.css'
import AsignaturasLista from './components/AsignaturasLista'

// useEffect
  // permite executar un codigo en momentos especificos, si se cumplen unas condiciones.

function App() {

  const [muestraAsignaturas, setMuestraAsignaturas] = useState(true);

  return (
    <div>
      <button onClick={() => setMuestraAsignaturas(false)}>Esconde Asignaturas</button>
      { muestraAsignaturas && <AsignaturasLista /> }
    </div>
  )
}

export default App
