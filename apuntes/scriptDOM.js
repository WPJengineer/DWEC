// const parrafo = document.querySelector('body > h1');

// console.log(parrafo.textContent);
// const parrafos = document.querySelectorAll('p');
// console.log(parrafos);

// // console.log(parrafos[1].textContent);

// parrafos.forEach(
//     (parrafo) => {
//         console.log(parrafo.textContent);
//     }
// );

// const titulo = document.getElementById('titulo-pagina');
// console.log(titulo);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[1]);

// const parrafos = document.getElementsByTagName('p');
// console.log(parrafos);
// console.log(parrafos[2]);
// for(let i = 0; i <= parrafos.length - 1; i++) {
//     console.log(parrafos[i].textContent);
// }



let enlaces = document.getElementsByTagName("a");
let enlace5 = enlaces[4];
let miDiv = document.getElementById("miDiv");
let parrafos = document.getElementsByTagName("p");
let divP = document.getElementById("divP");
let creaP = document.getElementById("creaP");

let polar = divP.getElementsByTagName("p")[divP.getElementsByTagName("p").length - 1].getElementsByTagName("img")[0];

let miP = document.getElementById("miP");

divP.insertBefore(parrafos[2], parrafos[1]);

console.log(miP.style.color);

miP.style.color = "cyan";

// console.log(enlace5);
// console.log(miDiv);
// console.log(polar);

creaP.addEventListener('click', () => {
    // console.log(polar);
    if (polar.alt) {
        let texto = document.createTextNode(polar.alt);
        let elemento = document.createElement("div");
        let miEnlace = document.createElement("a");

        elemento.appendChild(miEnlace);
        polar.parentElement.appendChild(elemento);
        polar.parentElement.replaceChild(texto, polar);
    }
});