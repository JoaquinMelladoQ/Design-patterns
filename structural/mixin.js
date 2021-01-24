// MIXIN

let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`);
    },
    despedir() {
        console.log(`Chao ${this.nombre}`);    
    }
};


// CLASE
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
};

// AUMENTAMOS EL PROTOTIPO
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario("Chanchito feliz"); 
usuario.saludar()