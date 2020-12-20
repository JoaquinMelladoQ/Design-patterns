const perro = {
    raza: 'kilterrier',
    ladrar: function() {
        console.log(`Guau! soy un ${this.raza}`)
    }
}

const kiltro = Object.create(perro)
kiltro.ladrar()

kiltro.raza = 'Supor perro!'
kiltro.ladrar()