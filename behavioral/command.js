const Commander = (() => {
    // PRIVATE OBJECT
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`)
        },
        vender: x => {
            console.log(`Vendiendo ${x}`)
        }
    }

    return {
        // PUBLIC OBJECT
        run: (comando, argumentos) => {
            if (!o[comando]) {
                console.log('Comando no existe')
                return
            }
            o[comando](argumentos)
        }
    }
})()

Commander.run('comprar', 'Mazda')
Commander.run('lala', 'no pasa nada')