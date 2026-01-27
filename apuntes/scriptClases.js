class Persona {
    // Constructor
     constructor(nombre) {
        this.nombre = nombre;
     }

     saludar() {
        console.log(`Hola, soy ${this.nombre}`);
     }
}

const ego = new Persona("Joshua");

// ego.saludar();

// Herencia - extends

class Empleado extends Persona {
    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre} esta trabajando y gana ${this.salario}€.`);
    }
}

muestraClase() {
    const maria = new Empleado("Maria", 1000);
    maria.saludar();
    maria.trabajar();
};
