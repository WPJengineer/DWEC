// FUNCIONES COMO PROPS

import './App.css'
import { useState } from 'react';
import Titulo from './components/titulo';
import Modal from './components/Modal'

const App = () => {

  const [eventos, setEventos] = useState(
    [
      {titulo: "examen DWEC", id: 1},
      {titulo: "concurso Programame", id: 2},
      {titulo: "puente de la Constitucion", id: 3}
    ]
  );

  const [mostrarEventos, setMostrarEventos] = useState(true);
  const [muestraModal, setMuestraModal] = useState(false);
  // const [muestraTest, setMuestraTest] = useState(true);

  console.log(muestraModal);

  const subtitulo = "Todos los eventos para Desarrollo de Aplicaciones Web";
  // const subtitulo2 = "Todos los eventos para Desarrollo de Aplicaciones Web";

  const handleClick = (id) => {
    setEventos((eventosPrevios) => eventosPrevios.filtros((eventos) => id != eventos.id))
    console.log(id);
  };

  const handleCerrar = () => {
    setMuestraModal(false);
  }

  // const handleTest = () => {
  //   setMuestraTest(false);
  // }


  return (
    <div className = "App">
      <Titulo titulo="Eventos de DAW y Olé" subtitulo={subtitulo}/>
      {!mostrarEventos && (
        <div>
          <button onClick={() => setMostrarEventos(true)}>Mostrar Eventos</button>
        </div>
      )
      }
      {mostrarEventos && (
        <div>
          <button onClick={() => setMostrarEventos(false)}>Ocultar Eventos</button>
        </div>
      )
      }
      {mostrarEventos && eventos.map((evento, index) => 
        <div key ={evento.id}>
          <h2>{index + 1} - {evento.titulo}</h2>
          <button onClick={() => handleClick(evento.id)}>Eliminar Evento</button>
        </div>
      )
      }
      
      {muestraModal && <Modal handleCerrar={(handleCerrar)} esExterno={false}>
        <h2>Stem Talks</h2>
        <p>¡No te lo pierdas!</p>
      </Modal>}

      {/* {muestraTest && <Test handleTest={(handleTest)}>
      <h2>Test</h2>
      </Test>

      } */}
      <div>
        <button onClick={() => setMuestraModal(true)}>Mostrar Modal</button>
      </div>
    </div>
  )

}

export default App