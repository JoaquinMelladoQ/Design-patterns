const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' }
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' }
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' }
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' }
]

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)
const head = xs => xs[0]
const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
})

const string = x => `${x.nombreCompleto} tiene ${x.edad} year()`

const traePrimerInfante = compose(
    string,
    formateo,
    head,
    xs => xs.filter(x => x.edad < 2),
)
    
