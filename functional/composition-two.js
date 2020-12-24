const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' }
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' }
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' }
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' }
]

const head = xs => xs[0]

const traePrimerInfante = data => {
    const primerInfante = head(data.filter(x => x.edad < 2))
    const infante = {
        nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: primerInfante.edad,
    }

    return `${infante.nombreCompleto} tiene ${infante.edad} year()`
}
