// Symbol - Valores unicos e inmutables -> identificadores en objetos.

// const id = Symbol("id");
// const persona = {
//     nombre: "Joshua",
//     [id]: 1
// };
// console.log(persona[id]);

// Iteradores
// Objetos que implementan un protocola de iteracion en javascript.
// const numeros = [1, 2, 3];
// const iteradoir = numeros[Symbol.iterator]();
// console.log(iteradoir.next());
// console.log(iteradoir.next());
// console.log(iteradoir.next());
// console.log(iteradoir.next());

// Set - Almacenar valors unicos de cualquier tipo.
// No permite duplicados

// const set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);

// set.clear()
// set.delete(3);

// console.log(set);
// console.log(set.size);

// console.log(set.has(4));

// Map
// Almacenar pares clave - valor
// const mapa = new Map();

// mapa.set("nombre", "Joshua");
// mapa.set("edad", 31);
// console.log(mapa);
// console.log(mapa.get("nombre"));
// console.log(mapa.has("edad"));
// mapa.delete("edad");
// console.log(mapa.has("edad"));
// console.log(mapa);