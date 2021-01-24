const Emitter = (() => {
    const topics = {}
    const hOP = topics.hasOwnProperty

    return {
        // THIS IS THE SUSCRIBER
        on: (topic, listener) => {
            if (!hOP.call(topics, topic)) topics[topic] = []
            topics[topic].push(listener)
        },

        // DISPATCHER
        emit: (topic, info) => {
            if (!hOP.call(topics, topic)) return
            topics[topic].forEach(item =>
                item(info!= undefined ? info : {}))
        }
    }
})()

Emitter.on('lala', x => console.log(x))

Emitter.emit('lala', { lala : 'lili' })