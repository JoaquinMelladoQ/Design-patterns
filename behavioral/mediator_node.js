const Emitter = require('events')

const emitter = new Emitter()

emitter.on('lala', x => console.log(x))

emitter.emit('lala', { lala : 'lele' })