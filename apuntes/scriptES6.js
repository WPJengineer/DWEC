// DESESTRUCTURACION: EXTRACCON DE VALORES

// Extraer valores de arrays y de objetos

// Array
// const numeros = [1, 2, 3];
// const [a, b, c] = numeros;
// console.log(a);
// console.log(b);
// console.log(c);

// Object
// const persona = {
//     nombre: "Joshua",
//     id: "x5366262v"
// };

// const {nombre, id} = persona;
// console.log(nombre);
// console.log(id);

// Atajo para la asignacion de propiedades a un objeto
// const nombre = "Joshua";
// const id = "x5366262v";

// const persona = {
//     nombre,
//     id
// };

// console.log(persona.nombre);
// console.log(persona.id);

// Template Strings
// operador de interpolacion `${}`
// const nombre = "Bob";
// const edad = 22;

// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad}`;
// console.log(mensaje);

// Operador spread o Operador de propagacion
// Expandir un array en multiples elementos
// const numeros  = [1, 2, 3];
// const nuevosNumeros = [... numeros, 4, 5];
// console.log(nuevosNumeros);

// Parametros por defecto
// function saludar(nombre = "John Doe") {
//     console.log(`Hola ${nombre}`);
// }

// saludar();

// Parametros rest
// Capturas un numero variable de argumentos
// Pasaremos varios parametros en uno solo
// function sumar(...numeros) {
//     let resultado = 0;
//     for(let numero of numeros) {
//         resultado += numero;
//     }
//     return resultado;
// }

// console.log(sumar(2, 4));

// Arrow functions
// function sumar(a, b) {
//     return a + b;
// }

// const sumar2 = (a, b) => {
//     return a + b;
// };

// const sumar2 = (a, b) => a + b;

// console.log(sumar2(6, 8));

// const sumar = (...numeros) => {
//     let resultado = 0;
//     for(let numero of numeros) {
//         resultado += numero;
//     }
//     return resultado;
// };

// console.log(sumar(2, 4));

// Metodos de arrays

const numeros = [1, 2, 3, 4, 5];

// ForEach()
// numeros.forEach(
//     (numero) => {
//         console.log(2 * numero);
//     }
// );

// map()
// const dobleNumeros = numeros.map(
//     (numero) => {
//         return numero * 2;
//     }
// );

// console.log(dobleNumeros);

// filter()
// const numerosPares = numeros.filter(
//     (numero) => {
//         return numero >= 3 && numero < 7;
//     }
// );

// console.log(numerosPares);

// reduce()
// const suma = numeros.reduce(
//     (acumulador, numero) => {
//         return acumulador + numero;
//     }
// );

// console.log(suma);

// find()
// let numeroEncontrado = numeros.find(
//     (numero) => {
//         return numero > 3;
//     }
// );
// console.log(numeroEncontrado);

// findIndex()
// const indiceEncontrado = numeros.findIndex(
//     (numero) => {
//         return numero > 3;
//     }
// );
// console.log(indiceEncontrado);

// const indiceEncontrado = numeros.findLastIndex(
//     (numero) => {
//         return numero > 3;
//     }
// );
// console.log(indiceEncontrado);

// some()
// const tieneNumeroPar = numeros.some(
//     (numero) => {
//         return numero < 1;
//     }
// );
// console.log(tieneNumeroPar);

// every()
// const todosPares = numeros.every(
//     (numero) => {
//         return numero % 2 === 0;
//     }
// );
// console.log(todosPares);

