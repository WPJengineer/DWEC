import './Modal.css';

export default function Modal({children, handleCerrar, esExterno}) {
  return (
    <div className="modal-fondo">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: esExterno ? "#ff4500" : "#555" ,
        textAlign: "center"
      }}>
        {children}
        <button onClick={handleCerrar} className={esExterno ? "externo-boton" : ""}>Cerrar</button>
      </div>
    </div>
  )
}