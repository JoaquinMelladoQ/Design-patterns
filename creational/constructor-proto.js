class MiClase {
    constructor(p1, p2) {
        this.propiedad1 = p1
        this.propiedad2 = p2
        // I am a method
    }
    metodo() {
        // MY NAME is prototype's method
    } 
}

const instancia = new MiClase(4, 2)
console.log(instancia)
//you will not be able to visualize the prototype with this code, unless you try to reach it from the web browser