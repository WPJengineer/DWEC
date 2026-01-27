// seleccionador los elementos del DOM
const contenedor = document.querySelector(".contenedor");
const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const peliculaSelect = document.getElementById("pelicula");
let precioDelTicket = +peliculaSelect.value;

// my task ---------------

const btnBuy = document.getElementById("btnBuy");

// -----------------------

llenaUI();

// FUNCIONES
function actualizaSeleccionAsientos() {

    const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
 
    // Haremos 3 cosas
    // - Copiar los asientos seleccionados en un array
    // - Mapear los datos en un array
    // - Devolver unos nuevos indices del array

    const asientosIndex = [...asientosSeleccionados].map((asiento) => {
        return [...asientos].indexOf(asiento);
    });

    localStorage.setItem('asientosSeleccionados', JSON.stringify(asientosIndex));

    const contadorAsientosSeleccionada = asientosSeleccionados.length;
    contador.innerText = contadorAsientosSeleccionada;
    total.innerText = contadorAsientosSeleccionada * precioDelTicket;

}

function guardaInfoPelicula(indicePelicula, precioPelicula) {
    localStorage.setItem('indicePeliculaSeleccionada', indicePelicula);
    localStorage.setItem('precioPeliculaSeleccionada', precioPelicula);
}

// my task ---------------

function actualizaOcupacionAsientos() {

    const asientosOcupados = document.querySelectorAll(".fila .asiento.ocupado");
    // console.log(asientosOcupados);
    const asientosIndex = [...asientosOcupados].map((asiento) => {
        return [...asientos].indexOf(asiento);
    });

    localStorage.setItem('asientosOcupados', JSON.stringify(asientosIndex));

}

// -----------------------

function llenaUI() {
    const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));
    // my task ---------------
    const asientosOcupados = JSON.parse(localStorage.getItem('asientosOcupados'));
    // -----------------------
    
    if(asientosSeleccionados !== null && asientosSeleccionados.length > 0) {
        asientos.forEach((asiento, index) => {
            if(asientosSeleccionados.indexOf(index) > -1) {
                asiento.classList.add('seleccionado');
            }
        });
    }

    // my task ---------------

    if(asientosOcupados !== null && asientosOcupados.length > 0) {
        asientos.forEach((asiento, index) => {
            if(asientosOcupados.indexOf(index) > -1) {
                asiento.classList.add('ocupado');
            }
        });
    }

    // -----------------------

    const indicePeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');

    if(indicePeliculaSeleccionada !== null) {
        peliculaSelect.selectedIndex = indicePeliculaSeleccionada;
    }

    const precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');

    if(precioPeliculaSeleccionada !== null) {
        precioDelTicket = +precioPeliculaSeleccionada;
    }
}

// EVENTOS
// Evento para seleccion de asientos
contenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains("asiento") &&
        !e.target.classList.contains("ocupado")) {

       e.target.classList.toggle("seleccionado");
       actualizaSeleccionAsientos();

    }
});

// Evento para la seleccion de peliclas
peliculaSelect.addEventListener('change', (e) => {
    precioDelTicket = +e.target.value;

    guardaInfoPelicula(e.target.selectedIndex, e.target.value);
    actualizaSeleccionAsientos();
    actualizaOcupacionAsientos();
});

// my task ---------------

btnBuy.addEventListener('click', () => {

    const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado:not(.ocupado)");
    
    asientosSeleccionados.forEach(asiento => {
        if(asiento.classList.contains("asiento") &&
        asiento.classList.contains("seleccionado")) {
            asiento.classList.add("ocupado");
            asiento.classList.remove("seleccionado");
    }
    actualizaOcupacionAsientos();

    localStorage.removeItem('asientosSeleccionados');
    contador.innerText = 0;
    total.innerText = 0;
    
    });

});

// -----------------------

actualizaSeleccionAsientos();
actualizaOcupacionAsientos();