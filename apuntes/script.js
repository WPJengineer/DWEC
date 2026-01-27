// console.log("Hola");
//comment
/*
comment block
*/

// VARIABLE var, let, const.
// let nombre = "Josh";
// let numero = 9;
// const PI = 3.141592;
// let gano = true;

// console.log(nombre, typeof(nombre));
// console.log(numero, typeof(numero));
// console.log(PI, typeof(PI));
// console.log(gano, typeof(gano));

// CADENAS
// let nombre = "Josh";
// let apellido = 'Kelly';
// let cuento = "Cuando despertó, el dinosaurio todavía estaba allí."
// let tabulacion = "Hola\tPepe"
// console.log(tabulacion);
// let salto = "Hola\nPepe"
// console.log(salto);
// let entreComillas = "Hola \"amigo\" Pepe";
// console.log(entreComillas);

// NUMEROS
// let edad = "30";
// let precio = "23.98";
// let ayudasArbitralesAlMadrid = Infinity;
// console.log(ayudasArbitralesAlMadrid);
// console.log(typeof ayudasArbitralesAlMadrid);

//null: algo definido, pero vacio o con valor nulo
// let valor = null;
// console.log(valor);
// console.log(typeof valor);

// let prova;

// NaN
//let resultado = "hola" / 3;

// Boolean
// let cristiano = true;
// let messi = false;

// Valores falsy
//null, "", undefined, NaN

// Operadores
// Aritmeticos -> operaciones matematicas
// suma: a + b
// resta: a - b
// multiplicacion: a * b
// division: a / b
// modulo: a % b
// let a = 10;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Unarios
// incremento: a++
// decremento: a--
// let a = 20;
// let b = 2;
// console.log(a++);
// console.log(++b);

// Asignacion
// suma y asigna: a += b; a= a  + b;
// resta y asigna: a -= b;
// multiplica y asigna: a *= b;
// division y asigna: a /= b;
// modulo y asigna: a %= b;

// Cambio de signo
// -: -a;

// let a = "5";
// console.log(typeof a);
// a = parseInt(a);
// console.log(typeof a);
// a = +a;

// let b = "4.55";
// console.log(typeof b);
// b = parseFloat(b);
// console.log(typeof b);

// Comparacion
// >, <, >=, <=, ==, !=, ===, !==

// let a = "5";
// let b = 5;
// console.log(a == b);
// console.log(a === b);

// Boolean
// AND &&, OR ||, NOT !

// let a = 5;
// let b = 10;

// let esMayor = a > b;
// let esMenor = a < b;

// console.log(esMayor, esMenor);

// Trabajando con cadenas
// let nombre = "Josh";
// let apellido = "Kelly";

// let nombreCompleto = nombre + ' ' + apellido;
//console.log(nombreCompleto);
// let inicialNombre = nombre[0];
//console.log(inicialNombre);
//console.log(nombre.length);

// Metodos pra trabajar con cadenas
// let nombreMayuscula = nombre.toUpperCase();
//console.log(nombreMayuscula);
// let nombreMinuscula = nombre.toLowerCase();
//console.log(nombreMinuscula);

// indexOf()
// let email = "josh@gmAil.com";
// let indiceArroba = email.indexOf('@');
// console.log(indiceArroba);

// let ultimaA = email.toLowerCase().lastIndexOf('a');
// console.log(ultimaA);

// slice()
// let resultado = email.slice(0, 3);
// console.log(email);
// console.log(resultado);

// substr()
// let resultado = email.substr(0, 3);
// console.log(resultado);

// subString()
// resultado = email.substring(0, 3);
// console.log(resultado);

// replace()
// let resultado = email.replace('s', 'X');
// console.log(resultado);

// ARRAYS
// Inicializacion
// let numeros = [1, 2, 3, 4, 5];
// console.log(numeros[2]);
// let nombres = ["Josh", "Marta", "Nicky"];
// console.log(nombres[1]);

// let numeros = new Array();
// numeros [0] = 1;
// numeros [0] = 2;
// numeros [0] = 3;
// numeros [0] = 4;
// numeros [0] = 5;

// console.log(numeros[4]);

// let nombres = new Array('Joan', 'Maria', 'Pere', 'Ana');
// console.log(nombres[2]);

// let numeros= new Array(5);
// numeros[0] = 8;
// numeros[4] = 100;
// numeros[10] = 69;
// console.log(numeros[10]);

// console.log(numeros.length);
// numeros = Array(5).fill(0);
// console.log(numeros);
// numeros = Array(4).fill(0);
// console.log(numeros);

// Metodos para arrays

// const frutas = ['manzana', 'platano', 'naranja'];
// console.log(frutas);

// push()
// frutas.push('uva');
// console.log(frutas);
// frutas.push(6);
// console.log(frutas);
// console.log(typeof(frutas[0]));
// console.log(typeof(frutas[4]));
// console.log(typeof(frutas));

// pop()
// let ultimoElemento = frutas.pop();
// console.log(frutas);
// console.log(ultimoElemento);

// shift()
// let primerElemento = frutas.shift();
// console.log(frutas);
// console.log(primerElemento);

// unshift()
// frutas.unshift('uva', 'pera');
// console.log(frutas);

// slice()
// const frutas2 = ['manzana', 'platano', 'naranja', 'uva'];
// console.log(frutas2);
// let copia = frutas2.slice(1, 3);
// console.log(copia);

// concat()
// const frutas2 = ['fresa', 'melocoton'];
// // const frutasCombinadas = frutas.concat(frutas2);
// const frutasCombinadas = [...frutas, ...frutas2];
// console.log(frutasCombinadas);

// splice()
// frutas.splice(1, 0, 'pomelo', 'kiwi');
// console.log(frutas);

// join()
// console.log(frutas.join());

// sort()
// console.log(frutas.sort());
// const numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort());
// const ciudades = ['Zaragoza', 'madrid', 'Barcelona', 'Ávila'];
// console.log(ciudades.sort());
// console.log(numeros.sort(function(a, b) {
//     return a - b;
// }));
// console.log(numeros.sort((a, b) => a - b));
// ciudades.sort((a, b) =>
//     a.toLowerCase() > b.toLowerCase() ? 1 :
//     a.toLowerCase() < b.toLowerCase() ? -1 : 0
// );
// console.log(ciudades);
// ciudades.sort((a, b) => a.localeCompare(b));
// console.log(ciudades);

// Estructuras de control
// if
// let edad = 19;
// let limite = 18;
// if(edad >= limite) {
//     console.log("Eres mayor de edad.");
// }

// if - else
// let edad2 = 17;
// let limite2 = 18;
// if(edad2 >= limite2) {
//     console.log("Eres mayor de edad.");
// } else {
//     console.log("No eres mayor de edad.");
// }

// if - else if - else
// let hora = 14;
// if(hora < 12) {
//     console.log("Buenos dias!");
// } else if(hora < 18) {
//     console.log("Buenas tardes!");
// } else {
//     console.log("Buenas noches!");
// }

// switch
// let nombre = "frodo";
// let edad = -Infinity;

// switch(nombre){
//     case "gandalf":
//         edad = 1230;
//         break;
//     case "aragorn":
//         edad = 532;
//         break;
//     case "frodo":
//         edad = 34;
//         break;
//     case "sam":
//         edad = 36;
//         break;
//     default:
//         edad = -1;
//         break;
// }

// console.log("edad: " + edad);

// Ternario ? :
// let edad = 20;
// let mensaje = (edad >= 18) ? "Eres mayor de edad." : "No eres mayor de edad.";
// console.log(mensaje);

// let hora = 20;
// let mensaje = (hora < 12) ? "Buenos dias!" : (hora < 18) ? "Buenas tardes" : "Buenas noches";
// console.log(mensaje);

// Iteracion
// while
// let contador = 0;
// while(contador < 5) {
//     console.log(contador);
//     contador++;
// }

// do while
// let contador = 10;

// do {
//     console.log(contador);
//     contador++;
// } while(contador < 5);

// for
// break continue
// for(let i = 0; i < 5; i++) {
//     if(i == 3) {
//         // console.log("Bingo");
//         // break;
//         continue;
//     }
//     if(i == 3) {
//         console.log("Bingo");
//         break;
//         // continue;
//     }
//     console.log(i);
// }

// Funciones
// function saluda() {
//     console.log("Hola!");
// }

// saluda();

// function suma(param1, param2) {
//     let resultado;
//     resultado = param1 + param2;
//     return resultado;
// }

// function muestraCalculo() {
//     console.log(suma(3, 7));
// }

// muestraCalculo();

// OBJETOS {} clave - valor
// let unCliente = {
//     nombre: "Peter Jackson",
//     "Direccion del cliente": "c/ desconocido",
//     "-+-+-+-+": "boquepasa",
//     pago: {
//         tipo: "Visa",
//         tarjeta: "1234567890",
//         "fecha de caducidad": "nunca"
//     }
// };
// console.log(unCliente);
// console.log(unCliente["nombre"]);
// console.log(unCliente.nombre);
// console.log(unCliente["Direccion del cliente"]);
// unCliente.nombre = "Josh";
// console.log(unCliente.nombre);
// console.log(unCliente.pago.tarjeta);

// JSON
// number, string, boolean, array, Object, function

// Metodos como datos
// let estudiante = {
//     id: 2,
//     nombre: "Peter",
//     diHola: function() {
//         return "Hola";
//     }
// };

// console.log(estudiante);
// let saludo = estudiante.diHola();
// console.log(saludo);
// console.log(estudiante.diHola());

// estudiante.edad = 22;
// estudiante.diAdios = function() {
//     return "Adios";
// };
// console.log(estudiante);

// this
// let factura = {
//     descripcion: "factura de prueba",
//     precio: 100.0,
//     iva: 21.00,
//     subTotal: function() {
//         return this.precio + (this.precio * this.iva) / 100;
//     }
// };

// console.log(factura);
// console.log(factura.subTotal());

// CONSTRUCTORES
// function Web() {
//     this.url = "http://localhost";
//     this.nombre = "Localhost";
//     this.muestraInfo = function() {
//         return this.url + ": " + this.nombre;
//     }
// }

// let unaWeb = new Web();
// console.log(unaWeb);
// console.log(unaWeb.url);
// let otraWeb = new Web();
// otraWeb.url = "http://fcbarcelona.cat"
// otraWeb.nombre = "Mes que un club";
// console.log(otraWeb);
// console.log(otraWeb.url);
// console.log(otraWeb.muestraInfo());

// function Web(url, nombre) {
//     this.url = url;
//     this.nombre = nombre;
//     this.muestraInfo = function() {
//         return this.url + ": " + this.nombre;
//     }
// }

// let unaWeb = new Web("http://localhost", "Localhost");
// console.log(unaWeb);

// Web.prototype.visitas = 2;
// Web.prototype.saluda = function() {
//     return "Hola";
// };
// let unaWeb = new Web("http://localhost", "Localhost");
// console.log(unaWeb.visitas);
// console.log(unaWeb.saluda());

// prototype

const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
const edades = [19, 57, 900, 19];
const personajes = {};
let edadTotal = 0;

for (let i = 0; i < nombres.length; i++) {
    personajes[nombres[i]] = edades[i];
    edadTotal += edades[i];
}

console.log(personajes);
console.log(edadTotal);