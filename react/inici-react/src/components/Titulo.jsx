import './Titulo.css';

export default function Titulo({titulo, subtitulo}) {

  // Fragmentos
  return (
    <div className='titulo-componente'>
      <h1 className="titulo">{titulo}</h1>
      <br />
      <h2 className="subtitulo">{subtitulo}</h2>
    </div>
  )
}