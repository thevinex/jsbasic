const {EventEmitter} = require('events')
const ev = new EventEmitter()
//ev.once Apenas uma unica vez
ev.on('saySomething', (message) => {
    console.log('Eu ouvi voce!', message)
})

ev.emit('saySomething', "Vinicius")
ev.emit('saySomething', 'Hehe')