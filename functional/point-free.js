const f = (ruta, cb) => {
    const resultado = computacionPesada()
    cb(resultado)
}


const manejaResultado = (resultado) => {
    
}
f(('/users', manejaResultado)