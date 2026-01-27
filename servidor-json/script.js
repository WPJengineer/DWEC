const urlPalabrasEndPoint = "http://localhost:3000/palabras";

// Cargar el contenido segun la pagina en la que nos encontramos.
const url = window.location.pathname;

if (url.includes("palabras-list.html")) {
  cargarPalabras();
} else if (url.includes("palabras-edit.html")) {
  const parametros = new URLSearchParams(window.location.search);
  const parametroId = parametros.get("id");

  if (parametroId) {
    cargarPalabra(parametroId);
  }
}



async function cargarPalabras() {

  try {
    const response = await fetch(urlPalabrasEndPoint);
    const palabras = await response.json();

    // console.log(response);
    // console.log(palabras);

    const listadoPalabras = document.getElementById('listado-palabras');

    if (palabras != null && palabras.length != 0) {
      listadoPalabras.innerHTML = palabras
      .map(
        (palabra) => `
          <div>
            <p>ID: ${palabra.id} - ${palabra.palabra} - Dificultad: ${palabra.dificultad}</p>
            <button class="editar" onclick="editarPalabra(${palabra.id})">Editar</button>
            <button class="eliminar" onclick="eliminarPalabra(${palabra.id})">Eliminar</button>
          </div>
        `
      )
      .join("");
    } else {
      listadoPalabras.innerHTML = "<p>No hay palabras registradas!</p>";
    }

  } catch (error) {
    console.log("Error al cargar las palabras!", error);
  }

}

document.getElementById("palabra-form")
?.addEventListener('submit', guardarPalabra);

async function guardarPalabra(e) {
  e.preventDefault();

  // Determinar si estamos añadiendo o editando.
  const id = new URLSearchParams(window.location.search).get("id");

  const method = id ? "PUT" : "POST";

  const url = id ? `${urlPalabrasEndPoint}/${id}` : urlPalabrasEndPoint;

  const palabra = {
    id: 0, // Codigo para generar un id
    palabra: document.getElementById("palabra").value,
    dificultad: document.getElementById("dificultad").value
  };

  // console.log(palabra.id, palabra.palabra, palabra.dificultad);

  fetch(`${urlPalabrasEndPoint}`)
    .then((response) => response.json())
    .then((datos) => {
      if (method == "POST") {
        palabra.id = +datos[datos.length - 1].id + 1;
        palabra.id += "";
        console.log("Añadiendo: ", palabra.id);
      } else {
        //palabra.id = +palabra.id;
        palabra.id += "";
        console.log("Editando: ", palabra.id);
      }
      return fetch(`${url}`, {
        method: method,
        body: JSON.stringify(palabra),
        header: {
          "Content-Type": "application/json",
        },
      }
      );
    })
    .then(() => (window.location.href = "palabras-list.html"))
    .catch((error) => console.log("Error al guardar la palabra", error));
}

async function cargarPalabra(id) {
  fetch(urlPalabrasEndPoint)
    .then((response) => response.json())
    .then((datos) => {
      const palabra = datos.find((palabraP) => palabraP.id == id);
      document.getElementById("palabra").value = palabra.palabra;
      document.getElementById("dificultad").value = palabra.dificultad;
    })
    .catch(() => console.log("Error al caragr la palabra: ", error));
}

function editarPalabra(id) {
  window.location.href = `palabras-edit.html?id=${id}`;
}

async function eliminarPalabra2(id) {
  try {
    console.log("Eliminando.");
    await fetch(`${urlPalabrasEndPoint}/${id}`, {method: "DELETE"});
    
    cargarPalabras();
  } catch(error) {
    console.log("Error al eliminar la palabra!", error);
  }
}

async function eliminarPalabra(id) {
  const urlDelete = `${urlPalabrasEndPoint}/${id}`;
  console.log("Eliminar: ", urlDelete);

  fetch(`${urlDelete}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => response.json())
  .then(() => cargarPalabras())
  .catch((error) => console.error())
}