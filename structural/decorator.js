class Macbook {
    // constructor() {
        // this.precio = 1000
        // this.pantalla = 11.6
    // }

    precio() {
        return 1000
    }
} 

const memoria = mac => {
    const v = mac.precio()
    mac.precio = function () {
        return v + 200
    }
}
const macbook = new Macbook()

memoria(macbook)

console.log(macbook.precio())

// macbook.agregarMemoria = function () {
//     this.precio += 100
// }

// macbook.agregarMemoria()

// console.log(macbook.precio)